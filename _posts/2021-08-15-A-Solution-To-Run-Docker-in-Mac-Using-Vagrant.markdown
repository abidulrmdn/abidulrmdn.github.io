---
layout: post
title:  "A Solution To Run Docker in Mac Using Vagrant"
author: abidul
categories: [ Tech, tutorial ]
image: https://miro.medium.com/v2/resize:fit:4800/format:webp/1*XWEb3XwND0APew1PJOqFvQ.png
tags: [docker, best_practices, mac, vagrant, problem, solution]
---

All of us developers using Mac in the 20th century have been facing a big issue. [ DOCKER OVER MAC ]

## The Issue
![Photo by Sebastian Herrmann on Unsplash](https://miro.medium.com/v2/resize:fit:1400/0*0WxySRhXwNPofuhR)
The file system on MAC just doesn't like the way docker works and it makes syncing files between your mac and the docker container very slow.

I’ve talked about a certain solution before in this article:
[a-team-of-mac-book-docker-users-amazing-solution-fe9592247d21](https://medium.com/studocu-techblog/a-team-of-mac-book-docker-users-amazing-solution-fe9592247d21)

In this blog, I would like to suggest a slightly better option.

The solution is to run vagrant with docker inside.

Vagrant proved to be a very good candidate for running docker over it in mac. Vagrant will run over a VirtualBox which is set up in a way that is more efficient than just setting up a virtual box by yourself.

The steps to do this are very minimal.

## Steps
Setup vagrant on your docker-machine
- Setup vagrant file that has proper configurations for your needs
- More info [here](https://www.vagrantup.com/docs/vagrantfile)
- Install docker over vagrant
Voila! done. You just need to write your docker-compose or run your image right away now.

## Summary
Docker doesn't run smoothly because of the issue of the file system. The best replacement for that currently is to act as if your machine is running Linux and run docker over it.
Either by installing raw Linux on VirtualBox and customizing it or by using vagrant to do so.
![Photo by Mr Cup / Fabien Barral on Unsplash](https://miro.medium.com/v2/resize:fit:1400/0*gkXaCqVPZ-SEmF_R)
