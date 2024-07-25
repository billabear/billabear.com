---
type: review
---
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
