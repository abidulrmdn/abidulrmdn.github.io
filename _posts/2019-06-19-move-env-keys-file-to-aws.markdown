---
layout: post
title:  "Move .env keys file to AWS"
author: abidul
categories: [ Medium ]
image: https://cdn-images-1.medium.com/max/800/1*F5Tlo-uIrM55tZcJ3TMB2g.jpeg
tags: [medium, import]
---
---

## Move .env keys file to AWS

This will help you centralize your Environments key management (esp for Laravel)

![](https://cdn-images-1.medium.com/max/800/1*F5Tlo-uIrM55tZcJ3TMB2g.jpeg)

A while ago we realized in my company that we don't store env keys (aka .env file)in the best secure way, and just like every company‘s main rule

Try as much as possible to keep sensitive keys from developers machines esp if they work from home.So, we decided to put all environment keys (aka .env file) in one place that is secure but only accessible to those who have credentials.

If you’re an AWS guy, you guessed it already. Yes, we moved to AWS `Parameter Store`.

## How Does AWS Parameter Store Works

AWS Parameter Store actually acts as an env file that is split into multiple files and those files are called ‘paths’. so, let's say you need an env SERVICE_KEY for each env (production, staging..)

So you will be stored in there as follow:

/production/SERVICE_KEY
and another one for staging
/staging/SERVICE_KEYAnd when you want that Env, you just have to provide the main path. so, if you want the production ones you can say give me whats under `/production`.

## What Did We Have

We had multiple environment keys for multiple regions and multiple types of servers (Development/QA/Staging/Production).

So, we divided those Envs in that order and in the same division of regions.

/production/sa-east-1, /production/ap-southeast-1and we did the same for those Envs that needs region

/staging/… , /qa/…
## How Did We Do It

- Stored everything in AWS first either using the [AWS Console](https://eu-west-1.console.aws.amazon.com/systems-manager/parameters?region=eu-west-1) or [CLI](https://docs.aws.amazon.com/cli/latest/reference/ssm/index.html).
- In our case we did a bulk insert by just making a script to change all values and make them into a command like the one below, then ran them all.
The Command for putting keys:
aws ssm put-parameter — name “/qa/SOME_KEY” — type “String” — value “KEY_VALUE"
- Then we setup our deployment script to fetch the needed env based on the build and based on that env (ex. staging) we fetch the right env values. ex of fetch below:

aws ssm get-parameters-by-path — path “/staging” — query “Parameters[*].[Name,’=’,Value]” — region eu-west-1 — output text | sed ‘s/[[:blank:]]//g’ | sed “s/\/staging\///g”

and we store the output in a file or something

Ex. {CommandAbove} > staging.env
## Improvement

Give your server a permission to access SSM (parameter store permissions), allow it to access those keys and never even generate a file and just use them by calling the SSM API for that key programmatically whenever you need it.
