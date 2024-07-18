---
title: "Feature Comparision: Stripe Billing Vs. Lago Billing - Getting Started"
slug: 'feature-comparision-stripe-billing-vs-lago-getting-started'
date: 2023-09-15T15:22:32+02:00
draft: false
author:
  display_name: Iain Cambridge
meta:
  keywords: Stripe Billing, Lago, stripe, payments, getting started,
  description: A feature comparision between Stripe Billing and Lago on the getting started process
  title: "Feature Comparision: Stripe Billing Vs. Lago Billing - Getting Started"
---
Here we'll go over a comparision of the onboarding process for subscriptions and billing systems Stripe Billing and Lago. Here we'll talk about the process from going to the landing page to going through the onboarding process for each system. 

# Stripe Billing

When you first land on the Stripe page they’re main aim is to get you to sign up with a secondary goal of booking a call with their sales team. On every page you go to it’s very easy to see how to get started. It’s also very easy to see how to get in contact with sales if you want to do that.

During the sign-up phase, you’re asked for 4 pieces of information: email, full name, country, and password, as well as be asked to agree to terms and a privacy policy.

![Stripe sign up form](/images/reviews/stripe/getting-started/signup.png)

Once you’ve submitted, you’re asked to confirm your email. Nothing special or fancy. It’s very much a standard thing where you confirm email before you’re able to do anything further.


After you’ve confirmed your email you’re greeted with a page with two options. One option is to activate receiving payments. And the other option is to explore the features. When you choose to explore you only get to see a small sideshow of the various features that Stripe provides. Every time you choose to get started it’ll send you to activate receiving payments.

![Stripe activated](/images/reviews/stripe/getting-started/explore.png)

 When you activate payments the first thing you need to do is provide the information for your business. What sort of business it is, where it’s based, tax number if it has one, and how long until the customer will receive the product they’ve paid for. The next step is to provide bank details for deposits. Then you have to enable a method for 2-factor authentication. It is not possible to have an active Stripe account without having 2-factor authentication enabled. It then tries to upsell you Stripe Tax.

![Stripe activated](/images/reviews/stripe/getting-started/details.png)

Once you’ve activated payments you are then able to use the platform. However, you’re unable to make deposits until Stripe has reviewed your information. The review time is between 2-3 days. However, this doesn’t really affect you that much it takes several days for payments to be withdrawable in the first place. 

There is no startup guide or onboarding process. You are greeted with 6 options for how to get up and running. The options are:

* Create a checkout page
* Manually charge a customer
* Invoice a customer
* Use a hosted payment UI
* Build a custom payment UI
* Charge customers in person.

![Stripe activated](/images/reviews/stripe/getting-started/activated.png)

Since Stripe is mainly a payment gateway with many features such as Stripe Billing. The onboarding process isn’t as smooth as others since it’s not as clear how you intend to use it as it is with other products.


## Lago

When you first land on the Lago marketing page the main call to action is to book a demo with the secondary call to action being to deploy the open source version. Each page has these two calls to action so it’s easy to navigate to either from anywhere on their marketing site.

In this review, we’ll review the open-source version. To get started with it locally as a test environment you have to have docker installed and able to use command lines. It’s not something you would expect a non-technical person to be able to handle. To set up a test, dev, or production environment you are only given the docker compose method and expected to have knowledge of how to deploy. Again, this is not something you would expect a non-technical person to be able to do.

![Lago sign up form](/images/reviews/lago/getting-started/login.png)

Once you’ve booted up the instance of Lago locally and you visit the application you’re greeted with a login page with a sign-up link. So you just click sign up and fill out the sign up form and you will create an account. When you sign up a new team/organisation is created. Lago is built from the ground up to be a multi-tenant application. This means if you’re running this yourself you have to have special security measures or someone could create an account and start using your instance. While it may seem pointless to do so since they would need their own integration keys and will not have any access to your data, there is something that seems insecure about allowing this.

There is no validation or checks. When I originally ran the commands it gave to start up Lago on my computer it didn’t work as expected due to how I have my computer configured and resulted in errors when I tried to create a user. It didn’t give me any explanation of what went wrong. I was only able to diagnose the cause of the error because I have technical skills.

Once you’ve logged in, there is no onboarding process. You’re just met with an empty system. There are no prompts. You can start creating customers and subscriptions. All without being warned that there is no integration with a payment gateway and that the payments that should be getting created won’t. 

![Lago sign up form](/images/reviews/lago/getting-started/empty.png)

Connecting to a payment gateway is done by providing the API key via the web UI. A very simple task that should in theory be doable by a non-technical person.

It is clear that Lago is targeting companies that have technical staff who are very technically competent. If you’re just getting started in tech you may run into issues setting it up. However, if you’re technically competent it’s reasonably easy to get up and running. 

The onboarding is very minimal but when you’re target is technical that isn’t really a problem.

## Conclusion

Stripe's onboarding is polished from begining to end. It's clear that this is a mature company that has spent a lot of time and engery in optimising their onboarding process.

Lago's onboarding is very simple. It's clear this is still a product that is in it's early stages. It's also clear that it's targetting a more technically advance audience overall than Stripe. Once you have got to the basics the getting started of creating products and prices it's very similar. 

If you're looking for nice and easy Stripe Billing is the clear winner.
