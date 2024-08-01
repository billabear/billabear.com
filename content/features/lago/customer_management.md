---
feature: customers
vendor: lago
---
You start off with a very sleek list page which provides a basic overview of the customer with information such as their name, the "external id", and the number of subscriptions.

The search functionality is very simple to use, you enter what you're searching for and it'll do what appears to be full text search over the standard fields. This search does not apply to custom meta fields.

When creating a customer you need to provide the name and the "external id". I find the external id name misleading as it's really the ID that is internal to your business therefore it's really an internal ID. This ID is then used for API calls and can't be changed after the customer is invoiced. The fact you need to provide this means your sales team can't just create new customers and have your system react to webhooks to create the customer within your system.

The customer overview looks very sleek. However, it clear that focus has been given to looking good instead of being functional and providing a good user experience for customer support team. I think this is highlighted with the fact that active coupons is the first item that will appear on the customer overview. I struggle to understand why that would be one of the first things you would need to see when handling a customer.

Overall I would say that because of how the customer functionality is Lago is unable to support sales and customer support teams with their billing solution. It also appears to be heavily focused on the technical side of things since the "external id" would often have to be requested from the tech team if a non-technical person was doing the creation.


## Customer Creation

Cons

* Web UI Requires the "external id" that is to be what is used within your backend.
* There is no webhook for when this happens.

Pros

* Has metadata
* Has Salesforce ID

## Customer View UI

Pros

* You can see the overall revenue numbers and outstanding for the customer at a quick glance
* Very nice analytics tab

Cons

* Upsale for insights
* Upsale for setting user locale
* Inability to filter on specific fields
