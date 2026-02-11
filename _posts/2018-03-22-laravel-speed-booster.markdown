---
layout: post
title:  "Laravel Speed Booster"
author: abidul
categories: [ Medium ]
image: https://cdn-images-1.medium.com/max/800/1*Ihd8eEM7cUZ4jXpMYSL2xQ.jpeg
tags: [medium, import]
---
---

![](https://cdn-images-1.medium.com/max/800/1*Ihd8eEM7cUZ4jXpMYSL2xQ.jpeg)

## Laravel Speed Booster

I’m guessing since you’re here, you’re already using Laravel, and I’m guessing also that you used it enough time to reach this level, where you start tweaking how it works and improving it. 
Yes, I agree Laravel is an awesome PHP framework, but it’s too abstract and generic in its code base for most applications, where it tries to cover all cases that an application might have.
But, whenever you make something too abstract or generic, you add extra unnecessary complexity and wasted speed to it, which if you’re concerned about the performance, it will definitely annoy you (which was the case in my current company, so we investigated).

![](https://cdn-images-1.medium.com/max/800/1*LXufUfLqzucaV6PDhciciw.jpeg)

Of course, when we talk about performance improvements here, we’re talking about milliseconds, especially if you worry about [Google’s recommendation](https://developers.google.com/speed/docs/insights/Server) which is below 200ms.

You should reduce your server response time under 200ms. There are dozens of potential factors which may slow down the response of your server: slow application logic, slow database queries, slow routing, frameworks, libraries, resource CPU starvation, or memory starvation.There are some client side improvements which can really improve your user experience in terms of website speed [which other experts can talk about](https://medium.com/@ra.hul/kickass-your-website-front-end-speed-fedeaa51df36), but we’re going to talk about server side improvement in here.
