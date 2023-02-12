---
layout: post
title:  "DevOps Tools That Software Engineers Must Know"
author: abidul
categories: [ Tech, tutorial ]
image: https://miro.medium.com/v2/resize:fit:1400/0*6_TJrJdTywcxfdv2
tags: [tools, aws, swe, list]
---
I’m a Software Engineer. Been that way and I’ll always be.

At a certain point during my career though, I’ve tasted the medicine of Automations. Mother of all of productivity tech. Bearer of the joy.
[*Devops*]

## The Tools
![Photo by Todd Quackenbush on Unsplash](https://miro.medium.com/v2/resize:fit:1400/0*GWsBLdj0piqyE_qM)
Some of those tools that are listed below will definitely help you become more efficient and more productive:
### Jenkins
(Main umbrella that will help you with the rest of the tools below)
[JENKINS](https://www.jenkins.io/)
Jenkins is a tool that can be hooked to your Github/Bitbucket and be able to trigger jobs/scripts on each push or a push with certain conditions.

Those scripts or jobs are things that helps with your code quality and deployment.

Example:
Your code touches a certain part of a big feature. you push your code, Jenkins then will run a script that you’ve setup which will test your code (unit/feature/functional/…) and if you also like can deploy the code to a testing env or even to production depending on your setup.

Another useful tool under Jenkins is

### Linters
Linters will help you make sure your code quality is top-notch.

You can setup some jobs to check if programmers had put a trailing comma on the same line or the next line. if an unnecessary semicolon was left. weird indentation and so on. you know the drill.

Other useful things that can be done, code sniffers, SonarQ …

### Run a Docker container
![Photo by Ian Taylor on Unsplash](https://miro.medium.com/v2/resize:fit:1400/0*X_QYP5XK_C0zRivr)
Let’s say you have a certain setup in your local which runs a certain container on docker to test a certain test suite.

you can do that in Jenkins!

## Alternatives to Jenkins
Other tools that do exactly the same thing as Jenkin are:

- Travis-CI
- Github actions
There are others of course, but those are the most known.

## Conclusion
Please be a better programmer by understanding at least how your code goes from being just a code to being processed to being setup on server and being served. Be a DevOps educated. Don’t be just a coder ;)