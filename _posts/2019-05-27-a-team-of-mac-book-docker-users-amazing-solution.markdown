---
layout: post
title:  "A Team of Mac-book Docker users amazing solution"
author: abidul
categories: [ Medium ]
image: https://cdn-images-1.medium.com/max/800/1*AOiMWUbJ02WpO_aNaaLPfA.png
tags: [medium, import]
---
---

![](https://cdn-images-1.medium.com/max/800/1*AOiMWUbJ02WpO_aNaaLPfA.png)

## A Team of Mac-book Docker users amazing solution

*Actionable/theoretical : actionable*

## INTRO

We at [StuDocu](https://studocu.com) strive to keep developing code faster, one of the main ways of achieving this is to have a fast working environment.

Now, since most of our developers are using MacBooks, and we have a huge stack that does millions of things; running docker on MacBook was a NO solution since it will be tremendously slow and resource consuming.

So we needed a solution that will help us speed things up. Our office server jumped for help. Thing is we have this server at the office which can be used as a web server. But, we ain’t using it! So we said what the hell!

Lets use it!
## Solution For Our Problem

We thought to ourselves since Docker runs most efficiently on Linux, lets setup the office-server with Linux and do a docker in docker instances.

Meaning, we run docker container for each developer.

- developer1-container
- developer2-container
- …

And each developer’s container would run the whole stack inside.

Since the IP is accessible by all, each was assigned a port to use for his environment and 1 command that will sync his/her local code to the server (very minimal sync, since we only sync changed files).

This allowed everyone to run his environment at full speed.

## The solution in Technical Details

### Creating users

First, we had to create users for each developer in the server, and add his ssh keys in there so that the sync/access later is possible.

### Developers Main Containers Setup

We created a docker-compose file that has each of the developers’ instances in it and mounted each of the Env ports to a different port that is unique than others. Of course, doing this manually can be tedious. So we made an Ansible script playbook that checks used ports then assigns the next best thing for each user.

Ex.
**Developer1-container**
- port 80: 1080
- port 443: 1443**Developer2-container**
- port 80: 2000
- port 443: 2443Each of those containers has the app [unison](https://www.cis.upenn.edu/~bcpierce/unison/) which will help real-time syncing changed files by each developer later on.

### Each Containers Setup

This part is straight forward, our Ansible playbook (*any other script type u prefer to do this dynamically instead of manually*) will clone our environment inside the container just like if you’re doing it on your laptop.

Basically:

- git clone repositories
- docker-compose up all your containers

### Developer side

So what we did is that we created a repo that has a the Ansible scripts, which creates a user, ups the developers’ container, run the internal environment and start syncing files.

Syncing files wasn’t that big of a deal as mentioned before we used [unison](https://www.cis.upenn.edu/~bcpierce/unison/). (which has its own file watcher) But in our case, we faced some issues with its file watcher, so we made a small script that watches files and then runs unison to sync the latest changes both ways.

The script can be as simple as:

fswatch -r --event Updated ./ | while read x; do
        unison ./ ssh://username[@s](mailto:1@local.studocu.com)erver/pathToSyncTo -batch -perms=0 -prefer newer -ignore="Name somefile/foldername"of course, you can play around with the script based on your environments.

## Pros and Cons Of This Solution

### Pros

- Fast environments.
- 1 type of maintenance, people will always face the same issues since its the same machine.
- Developers machines can survive longer cause it’s not exhausting.
- No need for everyone to have hands-on experience with docker, only few who are helping with this setup.

### Cons

- 1 point of failure (which didn’t happen but once to us).
- People cant really work remotely with this unless you do fancy setup on top of this.
