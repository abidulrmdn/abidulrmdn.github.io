---
layout: post
title:  "SAML 2 For Web Explained In Simple Words"
author: abidul
categories: [ Tech, tutorial ]
image: https://miro.medium.com/max/1400/0*TkX4rA4Vt4wIqPAO
tags: [summer]
---

I was working on this project a while ago related to SAML Protocol for SSO (Single Sign On) feature. Well, simply to put it into words I had to read a lot to understand how this amazing protocol works and how to use its features.

To start, I will explain what is SAML. SAML is a short [Security Assertion Markup Language](https://en.wikipedia.org/wiki/SAML_2.0) , meaning its a protocol used to enable authentication and authorization of services between two main services providers that are integrated with each other (SSO), something similar to what some services have like facebook/google login.

The difference here is that this is setup between a company A (ex. **PostsNStuff**) and a company B (ex. **ImportantBusinessPeople**). let’s say company ImportantBusinessPeople wants its employees to use a service they integrated with **PostsNStuff**. but, they want their employees to use that service using the same credentials they have in company ImportantBusinessPeople. this is where the integration of authorization and authentication happen between ImportantBusinessPeople and **PostsNStuff** happens. I hope I drew a clear picture up there.

To make things easier we’re going to call the companies: IBP (**ImportantBusinessPeople**) and PNS (PostsNStuff)

### Lets start being technical~ish

![Thinking](https://miro.medium.com/max/1400/0*dv_WfH2r5QvUixrg)
****
So the scenario is as follow:

- Employees from IBP opens PNS to use it.
- PNS It requires the user to login using their IBP credentials.
- The user enters those credentials
- Suddenly they’re logged in into the PNS system magically with their information from IBP.
Let’s get more technical.

#### How does this protocol works?
![Telegram](https://miro.medium.com/max/1400/0*EO1WjXbVRysYNymk)

SAML can be used for many things on Mobile/ sending messages back and forth and other stuff.
We’re going to focus only on the web part of it for logging in in using POST method.

This picture below explains a lot of how this works:

![Diagram](https://miro.medium.com/max/1400/0*yTRdmGKfbPQcSDJe.png)

As you can see in the picture we have 2 sides beside the user Agent (the employee in our case):

- *Identity provider (IDP)* : in our case its the company IBP
- *Service Provider (SP)* : in our case its the company PNS
The identity provider’s main responsibility is to provide whether the login credentials are correct or not and pass the right info that explains whether the user is good to go or not.

The service provider is the one that needs the IDP to give back a confirmation with a main key that the employee is authorized to use this service and to provide something that tells the SP who is this user.

So what happens in the steps above (Which you can read more technical details about in this Wiki) is that

1–2: the user asks PNS to login but PNS says ok we need to ask the IDP whether you’re allowed or not. so Im going to redirect you to a page they provided us with earlier on in a (meta.xml) that tells us what are the main URLs and so on. and then SP sends a SAML Request along with the redirection for the IDP to know that this is coming from a trusted source and that it knows what to provide.

3–4: the IDP says ok! give me credentials!.. OK! fine.. you look legit. I’m going to confirm back with an XML called SAML Response which will contain info about the authorization I just gave and the main ID that the SP will identify and match in their servers. do note that there must be some kind of user data syncing mechanism that is happening on a periodic basis between the SP and IDP.So that when the IDP send the ID of the user the SP would know what to fetch in their DB.

5–8: this is where the SP will understand what to fetch and will open up the service for the user if they were granted permission.

That simple.

#### All in All
I’ve done my best to hide the complexity of this protocol using very basic words to explains this complicated protocol.

Send request -> receive response with confirmation -> allow user to login.

### Some refs:

- [SAML 2.0 - Wikipedia](https://en.wikipedia.org/wiki/SAML_2.0)
- [Overview of SAML](https://developers.onelogin.com/saml)
- [Security Assertion Markup Language (SAML) V2](http://docs.oasis-open.org/security/saml/Post2.0/sstc-saml-tech-overview-2.0.html)
- [SAML Specifications .. SAML XML](http://saml.xml.org/saml-specifications)
