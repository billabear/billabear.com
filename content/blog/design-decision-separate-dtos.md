---
title: "Design Decision Separate Dtos"
date: 2023-08-28T11:04:50+02:00
draft: false
author:
  display_name: Iain Cambridge
meta:
  keywords: subscription management software, SaaS Business, Software as a Service, BillaBear
  description: Discusses why it was decided to use separate DTOs over other options
  title: Design Decision Separate Dtos
---
One of the decisions that had to be made early on was how to handle the input and output for the API endpoints. There are a few options such as serialising the entity and serialisation configuration is used to decide what is shown and when. Another option is to create a defined DTO that defines what should be there.

## Decision

The decision was to create separate DTOs for each endpoint and not to serialise the entity objects. This means each endpoint's request body has its own DTO, and each endpoint's response body has its own DTO. And DTOs are not reused.

Note, that generic model DTOs are shared. So Subscription, Customer, etc. are not redefined and are reused so that if the Customer model gets a new field it's replicated across all endpoints that have the customer data as part of its response.

Overall, I don't think there is a right or wrong answer between which option to choose. They all have their pros and cons.

## Why not Serialise the entity?

One of the core reasons not to serialise the entity is that it's far too easy for private internal data to be leaked by adding it and forgetting to add the ignore configuration. An example is a field that contains the link to who created a refund. This information is useful for internal auditing purposes however this isn't information something you would want to share.

Another reason it was decided to avoid this approach is that it generally results in using serialisation groups to decide which information is to be returned for each view. This can result in a complex array of groups and be confusing to which groups a new field should be added. This can also lead to information being shared when it wasn't meant to be shared.

The benefit of this approach is that you have a single source of truth when it comes to the entity. It contains the entity data as well as the serialised format data.

## Defined DTOs

One of the benefits of defining a DTO is that you explicitly define which data is there and you must explicitly map the data. This means that leaking data accidentally isn't possible without actively making mistakes. You have to actively accidentally add a field you didn't mean to, you have to actively map the field you didn't mean to. This means while it's possible it's generally a human error of making a mistake either in the ticket creation or ticket execution.

It could also be argued that this enables a separation of concerns, the entity is only concerned with the entity data and the DTO is only concerned with the serialised data format.

One of the downsides of this approach is that you have to create a class that is very similar if not almost identical to the entity. This can feel monotonous.

### Shared Or Separate DTOs

Once it was decided to create defined DTOs to contain the data format for serialisation the next question is if there should be DTOs that are shared or if each endpoint should have its own. 

The Shared DTOs option is the easiest option to start off with, you create a DTO and if another endpoint has the same needs you just use that. And for the most part, it is the least time-consuming option. However, in edge cases where after an extended period of development you find that you need to add a field to only one endpoint and that field can't exist in any other endpoint, things can get messy. You either end up creating a separate DTO for that endpoint which could lead to confusion since that endpoint is no longer consistent and that can lead to potential bugs with people not realising that single endpoint is different from the rest. Or you end up using serialisation groups and you introduce a mesh of the two options and end up with the original problems of the serialisation groups and the problems of defined DTOs. As well as running into the same issue when it comes to validation groups for request bodies.

The Separate DTOs option is the more time-consuming option. It can also feel messy since it feels like you're breaching DRY (Don't Repeat Yourself). This option provides the security that you know exactly what is being returned or sent for each endpoint. You can ensure easily that request bodies have the correct validation that is needed. There are many cases where one form needs one set of validation because it's creation but those rules don't exist when doing an update. The main downside of this approach is that it's more time-consuming and it's also easier to forget to add a rule or data to a DTO since you could end up with 4-5 request bodies that need to validate data that is reused.  

### Generic Response DTO Models

The reason for using generic response DTO models is that for the most part, there are models within your API response that should always be the same. If your API endpoint response contains customer data it should contain the same customer data that all the other API endpoints contain that way the response for customers is consistent and people can rely on that data being there. 

This provides a middle ground between completely shared DTOs and completely separate DTOs. Where the endpoint defines which data models it needs and those data models are shared.

