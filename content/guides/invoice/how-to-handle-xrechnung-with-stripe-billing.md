---
title: "How to handle XRechnung with Stripe Billing"
slug: "how-to-handle-xrechnung-with-stripe-billing"
section: invoice
author:
  display_name: Iain
meta:
  keywords: subscription management software, SaaS Business, Software as a Service, BillaBear
  description: How the new feature Invoice Delivery works
  title: "A walkthrough of how to handle XRechnung with Stripe Billing"
seo: false
---
This guide is on how to handle XRechung with Stripe Billing with no code changes required using BillaBear.

While BillaBear can completely take over your billing system/flow from Stripe Billing it can also enable you to easily add extra features to your Stripe Billing setup without affecting it. Here you're able to add XRechnung support for customers without any development changes.

## Video Walkthrough

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/FyFphhuAdFA?si=47hu0EYtAFQVurVd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Text walkthrough

If videos aren't for you (or my accent is too strong) here is a walkthrough in text.

### Step 1 - Setup

The first step is to configure Stripe.

![Screenshot of BillaBear](/images/guide/invoice/xrechnung-with-stripe/stripe_settings.png)

1. Click edit config and enter your Stripe keys
2. If you want to continue using Stripe Billing click 'Enable Stripe Billing'
3. Click "Start Import"
4. Click register Stripe Webhook

### Step 2 - Create Invoice Delivery For the customer

![Screenshot of BillaBear](/images/guide/invoice/xrechnung-with-stripe/create_new_invoice_delivery.png)

1. Go to the customer list
2. Search for the customer
3. View the customer
4. Scroll to the bottom to find invoice delivery methods
5. Click "Add New"
6. Create an invoice delivery with ZUGFeRD v1


### Step 3 - Everything is now Setup

Now everything is set up it's just a case of waiting for another charge/payment for the customer.
