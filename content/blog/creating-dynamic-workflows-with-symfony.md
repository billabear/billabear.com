---
title: "Creating Dynamic Workflows With Symfony"
slug: "creating-dynamic-workflows-with-symfony"
date: 2024-01-18T01:56:07+02:00
draft: false
author:
  display_name: Iain Cambridge
meta:
  keywords: Symfony, workflows, state machine, dynamic
  description: A step by step guide of how and why we created dynamic workflows in Symfony
  title: Creating Dynamic Workflows With Symfony
---
One of the core concepts within BillaBear is creating workflows for events such as creating or cancelling a subscription and receiving payments. There are often many things that need to happen during these process and if one fails you don't want to carry on with the others until the failed process is fixed and you want to be able to continue a failed process with ease instead of complex development work. To help BillaBear users with their processes we've created the ability to add custom steps to the workflows. Here we're going to explain how we used Symfony Workflows to create dynamic workflows.

## Places

To ensure the best overall experience for BillaBear users we added two different ways of creating custom Places. You can define them via using code or via the BillaBear admin system. Both have their pros and cons.

### Code defined Place

It's possible to define a place in the code. To do this you create a class in the `Custom` namespace, a namespace where it's safe to make custom changes without BillaBear overwriting it in future releases, that implements `App\Workflow\Places\PlacesInterface`. This is the same interface that it's used by the entity for the Place that is managed via the Admin UI.ß

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

BillaBear ships with some dynamic event handlers but you're also able to create your own by implementing `App\Workflow\TransitionHandlers\DynamicTransitionHandlerInterface` any class that implements this interface will automatically be collected into the DyanmicTransitionHandlerProvider.

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

To create the workflow we use the [WorkflowBuilder](https://github.com/billabear/billabear/blob/13bb4adfea3937eb1d47c0748e8811a0b75f73c8/src/App/Workflow/WorkflowBuilder.php) which does the following tasks.

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

### Building the Transitions

The transitions are built by using

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
