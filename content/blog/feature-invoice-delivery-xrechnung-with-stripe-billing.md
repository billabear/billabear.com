---
title: "Feature: Invoice Delivery - Support XRechnung with Stripe Billing"
slug: feature-invoice-delivery-xrechnung-with-stripe-billing
date: 2024-08-14T14:56:07+02:00
draft: false
_draft: false
author:
  display_name: Iain
meta:
  keywords: subscription management software, SaaS Business, Software as a Service, BillaBear
  description: How the new feature Invoice Delivery works
  title: "Feature: Invoice Delivery - Support XRechnung with Stripe Billing"
top: true
---
BillaBear now supports the ability to define Invoice Delivery methods for customers. This means you can choose how an invoice is delivered to your customer. This is useful in cases such as XRechung in Germany and Factur-X in France, as well as handling enterprise customers who have their own custom invoice flows you need to follow.

By Default, every customer is created with an invoice delivery method of email to the billing email attached to the customer. This is removable and you can add more delivery methods.

## Supported Methods

* SFTP - We upload to a SFTP server using the credentials supplied
* Email - We send an email to the address
* Webhook - We send a HTTP request to the URL supplied.

## Supported Formats

* PDF
* ZUGFeRD v1

## How it works

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/uTiXC6PCyCw?si=nCUJY0b3gOCFi1qP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Create Invoice Delivery Method

You go to the customer and scroll down to the bottom until you see the invoice delivery methods and then you click add new

![Screenshot of BillaBear](/images/posts/feature-invoice-delivery-stripe-xrechnung/create-new-invoice-delivery.png)

### Invoice Delivery

Once an invoice is created during the customer notification part of the invoice creation workflow is when the invoice delivery methods are scheduled to be done. Invoice delivery is done in the background and it's failure does not affect the flow of the invoice creation.

### Viewing Invoice Delivery Status

To view the invoice delivery that apply to an invoice you just need to view the invoice and there will be a list at the bottom

![Screenshot of BillaBear](/images/posts/feature-invoice-delivery-stripe-xrechnung/list-invoice-deliveries.png)

