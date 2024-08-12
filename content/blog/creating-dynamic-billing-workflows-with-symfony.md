---
title: "Creating Dynamic Billing Workflows With Symfony"
slug: "creating-dynamic-billing-workflows-with-symfony"
date: 2024-08-12T01:56:07+02:00
draft: false
author:
  display_name: Iain Cambridge
meta:
  keywords: Symfony, workflows, state machine, dynamic
  description: A step by step guide of how and why we created dynamic workflows in Symfony
  title: Creating Dynamic Workflows With Symfony
top: true
---
One of the core concepts within BillaBear is creating workflows for events such as creating or cancelling a subscription and receiving payments. There are often many things that need to happen during these process and if one fails you don't want to carry on with the others until the failed process is fixed and you want to be able to continue a failed process with ease instead of complex development work. To help BillaBear users with their processes we've created the ability to add custom steps to the workflows. Here we're going to explain how we used Symfony Workflows to create dynamic workflows.

## Why not normal webhooks?

One of the first questions that really needs to be answered is, why? If BillaBear supports standard webhooks, which it does, why would you ever need to have a webhook that blocks your workflow if it fails? The simple answer to that is, it's about how important the webhook actually are. For many webhooks if we don't receive one or it fails, often it's not a big deal. But sometimes, it really is. For example, if when creating a subscription you need to create resources so the customer can use the subscription and they can't use it without those resources. That isn't something that should be handled in a fire and forget webhook. That's something you can to keep track of if it fails and rerun it once you've fixed whatever broke.

And maybe you want to integrate deeply with a third party so you would want to use their sdk in a custom transition handler.

## Places

To ensure the best overall experience for BillaBear users we added two different ways of creating custom Places. You can define them via using code or via the BillaBear admin system. Both have their pros and cons.

### Code defined Place

It's possible to define a place in the code. To do this you create a class in the `Custom` namespace, a namespace where it's safe to make custom changes without BillaBear overwriting it in future releases, that implements `BillaBear\Workflow\Places\PlacesInterface`. This is the same interface that it's used by the entity for the Place that is managed via the Admin UI.

This class will allow you to define:

* The name of the place 
* The piority of the place aka where it should be in the order
* The workflow that it is for 
* The name of the transition for the place

#### Pros

* Easy to maintain for development
* Ability to define a custom event handler for the transition 

#### Cons

* Can't be enabled/disabled without code changes and a deployment
* Can't reuse the dyanmic event handlers

### Admin UI dedined Place

It's possible to add extra places within the workflow via the admin system, this can be very useful for creating webhooks for adding steps to your processes.

![Screenshot of BillaBear](/images/creating-dynamic-billing-workflows-with-symfony/create_screenshot.png)

Creating a place via this will allow you to:

* Define the name of the place
* The pre-defined event handler
* Set options for the event handler

#### Pros

* Ability to disable and enable without development work
* Can use the dynamic event handlers.

#### Cons

* Can't be tracked by the development team
* Can't use a custom event handler

## Dyanmic Transition Handlers

BillaBear ships with some dynamic event handlers but you're also able to create your own by implementing `BillaBear\Workflow\TransitionHandlers\DynamicTransitionHandlerInterface` any class that implements this interface will automatically be collected into the DyanmicTransitionHandlerProvider.

```php
interface DynamicTransitionHandlerInterface
{
    public function getName(): string;

    public function getOptions(): array;

    public function execute(Event $event): void;

    /**
     * Added to allow the handler to have the transition to get the handler options. Otherwise,
     * the only other option is to fetch the workflow transition in the workflow processor, and
     * it makes no sense to fetch the data in two different places. And this allows more overall
     * flexibility since they'll have access to all the data when executing the handler.
     */
    public function createCloneWithTransition(WorkflowTransition $transition): DynamicTransitionHandlerInterface;
}
```


## Building the Workflow

Now we get to what I consider the coolest part. Symfony Workflow allows you to define workflows via Yaml and other configuration options. But since this is all dynamic and can change from run to run and things can be added without changing the config, that's pretty much out of the window. Which meant I was going to have to build the workflows on the fly and that's just cool in my book.

To create the workflow we use the [WorkflowBuilder](https://github.com/billabear/billabear/blob/92e6cc210a9d28dc24e5c0f4cda9493dc868c765/src/BillaBear/Workflow/WorkflowBuilder.phpp) which does the following tasks.

It fetches the places for the workflow from the PlacesProvider which returns the places in order. Then it's a case of building building the Symfony Workflow Definition.

* The first argument for the Definition is an array of strings that contain the names for each Place. 
* The second argument for Definition is an array of Symfony Workflow Transitions with the transitions building being linked from each other in order as being in the array. 
* The third argument is an array of strings with the starting positions for a workflow. In our case we just take the first value from the array of Place names since it's in order.
* The fourth and final argument is a MetadataStoreInterface, which we just the use the default InMemoryMetadataStore with two empty arrays and an instance of 

```php
        $definition = new Definition(
            $this->getPlaceNames($places),
            $this->getTransitions($places),
            [$this->getPlaceNames($places)[0]],
            new \Symfony\Component\Workflow\Metadata\InMemoryMetadataStore([], [], new \SplObjectStorage())
        );
```
### Getting the place names

```php
    private function getPlaceNames(array $places): array
    {
        return array_map(function (PlaceInterface $place) {
            return $place->getName();
        }, $places);
    }
```

### Building the Transitions

The transitions are built by looping through the places and seeing if the place is enabled. If it's not, then there is much use for aa transition. It then uses the last previous place as the from place and the current place as the to place.

```php
    /**
     * @param PlaceInterface[] $places
     *
     * @return Transition[]
     */
    private function getTransitions(array $places): array
    {
        $output = [];
        $from = null;
        foreach ($places as $place) {
            if (!$place->isEnabled()) {
                continue;
            }
            if ($from instanceof PlaceInterface) {
                $output[] = new Transition(
                    $place->getToTransitionName(),
                    $from->getName(),
                    $place->getName(),
                );
            }

            $from = $place;
        }

        return $output;
    }
```

### Adding event handlers

Since the workflow system is built ontop of events, we need to add events handlers to handle the transitions. We only do that for workflow transitions that are coming from the database. Which is why there is a check to see if it's coming from the database or not. Then it's just a case of following the naming convention that Symfony has.

```php
    private function addEventHandlers(WorkflowType $workflowType, array $places): void
    {
        foreach ($places as $place) {
            if ($place instanceof WorkflowTransition) {
                $handler = $this->dynamicHandlerManager->createHandler($place->getHandlerName(), $place);
                $this->eventDispatcher->addListener(sprintf('workflow.%s.transition.%s', $workflowType->value, $place->getToTransitionName()), [$handler, 'execute']);
            }
        }
    }
```   

## Conclusion

This is how we've built the ability to have custom dynamic billing workflows using the Symfony Workflow component.

Since you're here, a small sales pitch. BillaBear can help you dramatically reduce how much money your company is spending on Stripe Billing fees and it can be done with a few clicks. Example, if your company is doing 1MM MRR or 12M ARR at the current price they would say **$4.750.00** a month. And there are many more fees that can be reduced, Stripe taxes would be another **$5,000**. So, maybe you tell your boss you can save money here and then spend the savings on other tech that will make your lives easier.