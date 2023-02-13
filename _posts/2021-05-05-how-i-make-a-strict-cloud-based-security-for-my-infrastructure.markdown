---
layout: post
title:  "How I Make a Strict Cloud-based Security for My Infrastructure"
author: abidul
categories: [ Tech, cloud, tutorial ]
image: https://miro.medium.com/v2/resize:fit:1400/0*AlGKbo7JH7lWxx24
tags: [ security, aws, cloud, employees, awareness, infrastructure, security, featured]
---
During my 7years of experience in Backend and DevOps I’ve realized over time that a platform that you help developing and maintain throughout the years is worth nothing if there was a security breach one day in the company, it will make the company lose credibility, peoples privacy and data, some times lots of money. So for me, It's a no-brainer thing to discuss or investigate how to tighten your security for your infrastructure in your current company or even if it was your own company.

## Why?
Well, I can come up with many reasons why you’d want to do that, some of them are:

- If an employee left the company they might give access or unintentionally care little about information regarding access to your platform which might lead to a potential unwanted hacking incidence.
- Employees not locking their laptop causing other people to access your platform and destroy it.
- The list is very long.. do you really want me to continue?
Now, let's not waste much time and tackle this issue with some of the most know solutions that I’ve used and will still use in my career path.

# Here We Go
## VPN
If you have an infrastructure or couple of services that have static IPs then put a VPN in front of those to make them only accessible to those who have VPN setup in their machine, not just anyone on the internet.


![Photo by Petter Lagson on Unsplash](https://miro.medium.com/v2/resize:fit:1400/0*fyhzFQM5mHRpBW6N)
## Access Proxy
Even if you have internet some services require certain developers to access the server for example through ssh. you can give those developers ssh keys and let them access but you have to deal with the consequences of maintaining this (especially if someone leaves, then you have to generate a new one for everyone) and how loose it can be used by people other than those who the keys were given to.

A better way to do this is to give access to users to certain servers through an access proxy. a service such as [Teleport](https://goteleport.com/). Where you can say this developer using this password and user name gets to access this and that server. no keys with developers no servers direct access. You can withdraw those privileges anytime.

[Teleport - Access Computing Resources Anywhere](https://goteleport.com/)
_Teleport allows engineers and security professionals to unify access for SSH servers, Kubernetes clusters, web…
goteleport.com_

## Rotate Access Keys
Let's say you have to give some people some access keys or some keys are needed for accessing some API’s from your platform and the devs have access to this, and it has to be published in GitHub (even if it was private) then you’re risking the chance if someone has access to those keys can use them to their platform or do other stuff.

The partial solution to all of this is to rotate your keys on a periodic basis, let's say every 3 months. where you change all of those keys with new ones, so, if someone by any chance has one of those it will be invalid.


![Photo by Jozsef Hocza on Unsplash](https://miro.medium.com/v2/resize:fit:1400/0*ApxnN8pHHpHDhen4)
## Privileges
NEVER! And I repeated this, NEVER give developers full access to your infrastructures console. always give only what's needed, meaning if a developer needs to manage a certain staging environment then go make some privileges on his account to access only staging. Better safe than sorry.

![Photo by Kyle Glenn on Unsplash](https://miro.medium.com/v2/resize:fit:1400/0*sXuRuJa0XZFrHps0)
## Install Security Applications
Some companies prefer to go the extra mile of restricting employees' activities on the company’s hardware that is used by developers and other employees.

That software will control what application you’re allowed to install on your work phone/laptop and what settings you’re allowed to configure.

## Strict Passwords
Teach all of your employees to never use weak passwords. any weak password is a potential hack into your system.
![Photo by NeONBRAND on Unsplash](https://miro.medium.com/v2/resize:fit:1400/0*jAGVGkEegjEjmYOB)

## Security Awareness Courses
All of the methods above are mostly technical, now let's talk about `social engineering`. that means people can be hacked by being careless sometimes like passing their credentials to someone they “trust”, or maybe typing the password in public.

So it's very crucial to give a course to your employees and educate them about the risks of security and to make them aware of its consequences.

![Photo by Dylan Gillis on Unsplash](https://miro.medium.com/v2/resize:fit:1400/0*bWI1pR1BD1_qYTDT)

Some of the social engineering
- Lock your computer if you’re away. someone might access it if you’re away.
- Change passwords every once in a while.
- Try to be careful about over-the-shoulder hacking. where someone might just look at what you type on your keyboard for a password.
- Be careful what information you share with people outside the company.
- A long list for this. but for more info check the link below:
[Top 5 Social Engineering Techniques and How to Prevent Them](https://www.exabeam.com/information-security/social-engineering/)
_Social engineering is a cyber security threat that takes advantage of the weakest link in our security chain - our…
www.exabeam.com_
---

## Conclusion
Educate yourself and educate your colleagues/employees about security and be aware of its consequences.

Be proactive about this and set up what you can to prevent a potential hack.