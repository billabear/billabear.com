---
title: "The Reality of Not Invented Here"
slug: "the-reality-of-not-invented-here"
date: 2023-09-04T15:22:32+02:00
draft: false
author:
  display_name: Iain Cambridge
meta:
  keywords: subscription management software, SaaS Business, Software as a Service, BillaBear
  description: Discusses Not invented here and how it really works
  title: The Reality of Not Invented Here
  social_card: '/images/not-invented-here.png'
---
When I first heard of Not Invented Here (NIH) as a junior developer, I always thought it meant that the company wouldn't use anything external. I thought it would be a case that every tool would be developed internally. I thought it was going to be driven purely by ego that they thought they could do better. And for a long time, I thought I never worked somewhere that had that problem. The reality of NIH is completely different from what I expected and I've been encountering it for far longer than I thought.

## Large Companies

For this post, I'll be focusing mostly on small to medium-sized teams. The motivation at larger enterprise companies is often different. At enterprise companies, it could just be an issue that they can't or don't want to jump through the hoops it takes to get a third-party vendor approved by procurement.

In other companies, they could be motivated by promotion. A case of they're more likely to move up the ladder if they've been on a team that created a new project. Whether or not it was truly needed.

These seem like valid reasons. It's valid you want to build something because it's easier than getting a third-party vendor approved. And it's fair that people want to look good at a company. If the company promotes people based on that criteria then the company made the decision for this approach.

## Using Libraries And Other Tools

One of the biggest things is that teams that are engaging in NIH are generally using lots of external libraries, frameworks, and tools. We as a development community have done so well in frowning upon homebaked frameworks that it's extremely rare that you even hear of a team that uses a homebaked framework. Libraries are generally used liberally. And this is why you often don't realise you've got an NIH problem.

## Motivation

When I first started out, I thought the motivation behind NIH was ego. And that they thought they could deliver something better than what others were delivering. Nearly every time I've seen NIH in action, it's been caused by people having good intentions. They think they will save the company money by building it themselves. They think we don't need all the features, they can get away with having a subset of the features. So they often don't even think it's an NIH issue. Because it's not about the fact it wasn't invented there. It's about trying to save the company money and that they honestly don't think they need all the fancy features that while they would be good they don't need them.


## An Example

For this part, I'll use feature flags as the example feature and LaunchDarkly as the third-party service. Simply because this is the feature that I've seen NIH happen with the most that caused so much hassle. And it's very easy to see why teams fall into this trap with this specific feature. However, I've seen this happen with major functionalities as well and it often happens with major functionalities.

A quick introduction to what a feature flag is. A feature flag is simply a flag for whether or not a feature is to be used or not. It is core it's an if statement. It's very easy to see why development teams think they can just build their own. It's just an if statement. We can store the value in the configuration file or in the database. Super simple.

Then you have something like LaunchDarkly, a SaaS platform that just focuses on feature flags. It's got more features than you can even imagine using.

What generally happens is the development team thinks we can save $50-100 a month if we build the feature flags ourselves. It'll take 2-3 days and then it's done. However, it takes about 6-7 days. It goes through original development for 2-3 days, goes to code review, takes 1-2 days to get through code review, and then 1-2 days to get QA. With even a very low salary of just $50k per year for each staff member, this feature just cost a minimum of $1,000 and probably more in the range of $1,500-2,000. For the original development of a bare-bones feature flag system. They could have paid for 3 seats on LaunchDarkly's Pro plan for 2 for that.

But of course, it needs more than just the original development. Depending on how the feature flag system was developed there are times when it needs development work each time a flag is to be changed. If it's based on ENV variables then it needs deployments and all sorts of stuff. And often it results in performance issues at a moderate scale. So then you have all the development work to investigate why such and such feature is slow. And then it turns out to be the feature flag system. So then you have fix the performance issue. Say you have 1-2 days to investigate the performance issues, 2-3 days to develop a fix, 1-2 days for code review, and 1-2 days for QA.  We're back to another $2,000-$3,000 in cost. For a feature that isn't part of your core functionality and doesn't really help you move the needle.

Whereas, LaunchDarkly, purely focuses on feature flags. That is their business. They have lots of developers purely focused on it. If a performance issue comes from feature flags that is their responsibility to fix. You get all the extra functionalities that LaunchDarkly brings and not a bare-bones feature flag system. 

Based on a below-market average salary of $50,000 a year, it's easy to estimate that a bare-bones feature flag system built to save the company would cost $5,000. While if the company outsourced it to LaunchDarkly they could get 10 seats of LaunchDarkly's Pro plan for 2 years and get a state-of-the-art feature flag system. So while it started with good intentions, the reality is it's a false economy where the company spends more money trying to save money.

## Conclusion

The reality of NIH in most development teams in this era of development isn't about inventing everything in-house, it's trying to save costs by building something themselves while forgetting that their time costs the company money.

Often companies end up with subpar bare-bones functionality that needs maintenance and increases on-boarding. This doesn't just apply to features like feature flags but includes things such as billing and finance, emails both transactional and marketing, business intelligence, logging, monitoring, etc. This list goes on where companies build their own and end up with something that costs them more and delivers less than if they just got a solution from a third party.

