---
title: "Feature Comparision: ChargeBee Vs. Lago Billing - Getting Started"
slug: "feature-comparision-chargebee-vs-lago-getting-started"
date: 2023-09-15T15:22:32+02:00
draft: false
author:
  display_name: Iain Cambridge
meta:
  keywords: chargebee, Lago, stripe, payments, getting started,
  description: A feature comparision between ChargeBee and Lago on the getting started process
  title: "Feature Comparision: ChargeBee Vs. Lago Billing - Getting Started"
---
Here we'll go over a comparision of the onboarding process for subscriptions and billing systems ChargeBee and Lago. Here we'll talk about the process from going to the landing page to going through the onboarding process for each system. 

# ChargeBee

When you go to the ChargeBee website the main thing it tries to do is to get you to book a demo to get you into the sales funnel. However, it is entirely possible to sign up for a free trial and even choose a paid plan without having to get on a call. You do this by either clicking “sign up for free” on the home page or clicking “sign up for free” on the pricing page under the starter column.

![ChargeBee sign up form](/images/reviews/chargebee/getting-started/signup.png)

During the signup form process, you’re asked for 3 bits of information: email, phone number, and revenue. There is also a sort of hidden option where you can choose in which region your data is stored. This is important for many companies since they need to follow data privacy laws and that can demand your data is stored in certain areas.

Once you submit that you get told to check your email, I think they actually do some background logic to find out who your email provider is. I used a custom domain with Google Suite and it provided me a link to go back to Google Mail. 

Once you confirm your email you then get to choose the name for your subdomain on Chargebee, the name of your account, and set your password. There is then some onboarding data collection such as finding out your goal and then they try to book an onboarding call. I didn’t do the onboarding call so I can’t say anything about it. But I can say that the calendar that was meant to load didn’t. I assume it got blocked by adblockers.

It sets up some sample data so you’re able to start playing around within the test account. 

The first setup widget you have is to create a test plan with a price and then simulate a purchase using a modal to show you how a customer would be buying. I found this to be quite informative and reassuring as you find out quickly how the customer would go through the purchasing process and you see it for yourself. 

![ChargeBee onboarding process](/images/reviews/chargebee/getting-started/onboarding.png)

There is then a setup guide in the sidebar, I found this rather hidden and not really something that jumped out at me. So I was originally left searching around the settings to try and figure stuff out before I spotted it. Once I spotted it and clicked on it, it was great and very useful.

During this setup stage, you create a plan and set the pricing. This is a quick and easy process with a slick UI. The plan creation and pricing will be gone over in finer detail later.

Then choose your payment gateway allowing you to choose between multiple. This means that you also have to go through another setup process to get started with ChargeBee. Connecting it to Stripe was as easy as using Stripe Connect clicking a button and logging into Stripe.

The options for integrating it start off with payment links that are defined and you just add a link. The next option suggested is using the javascript library where you add the JS library by copying the HTML given and pasting it into your HTML code. And then copying a buy now HTML to add a buy now link, as well as, a portal link. Lastly, it provides a link to API integrations.

Approximately 30 minutes after sign-up I got a phone call from Chargebee to find out my requirements. So they’re very hands-on with the signup process.

Overall, I would say the onboarding process for ChargeBee is very slick and impressive. It’s easy to use and doesn’t require a lot of technical knowledge. The ease of integrating it being as simple as adding a link or a few lines of HTML makes getting started really easy. While also providing a feeling of white-glove onboarding with onboarding calls and follow-up calls.

## Lago

When you first land on the Lago marketing page the main call to action is to book a demo with the secondary call to action being to deploy the open source version. Each page has these two calls to action so it’s easy to navigate to either from anywhere on their marketing site.

In this review, we’ll review the open-source version. To get started with it locally as a test environment you have to have docker installed and able to use command lines. It’s not something you would expect a non-technical person to be able to handle. To set up a test, dev, or production environment you are only given the docker compose method and expected to have knowledge of how to deploy. Again, this is not something you would expect a non-technical person to be able to do.

![Lago login form](/images/reviews/lago/getting-started/login.png)

Once you’ve booted up the instance of Lago locally and you visit the application you’re greeted with a login page with a sign-up link. So you just click sign up and fill out the sign up form and you will create an account. When you sign up a new team/organisation is created. Lago is built from the ground up to be a multi-tenant application. This means if you’re running this yourself you have to have special security measures or someone could create an account and start using your instance. While it may seem pointless to do so since they would need their own integration keys and will not have any access to your data, there is something that seems insecure about allowing this.

There is no validation or checks. When I originally ran the commands it gave to start up Lago on my computer it didn’t work as expected due to how I have my computer configured and resulted in errors when I tried to create a user. It didn’t give me any explanation of what went wrong. I was only able to diagnose the cause of the error because I have technical skills.

Once you’ve logged in, there is no onboarding process. You’re just met with an empty system. There are no prompts. You can start creating customers and subscriptions. All without being warned that there is no integration with a payment gateway and that the payments that should be getting created won’t. 

![Lago empty dashboard](/images/reviews/lago/getting-started/empty.png)

Connecting to a payment gateway is done by providing the API key via the web UI. A very simple task that should in theory be doable by a non-technical person.

It is clear that Lago is targeting companies that have technical staff who are very technically competent. If you’re just getting started in tech you may run into issues setting it up. However, if you’re technically competent it’s reasonably easy to get up and running. 

The onboarding is very minimal but when you’re target is technical that isn’t really a problem.

## Conclusion

ChargeBee's onboarding is polished from begining to end. It allows non-technical people to get up and running without any problems. It's clear that this is a mature company that has spent a lot of time and engery in optimising their onboarding process.

Lago's onboarding is very simple. It's clear this is still a product that is in it's early stages. It's also clear that it's targetting a more technically advance audience than ChargeBee so the things that are needed and nice in the ChargeBee onboarding are pointless with the getting started process with Lago.

If you're looking for nice and easy ChargeBee is the clear winner.
