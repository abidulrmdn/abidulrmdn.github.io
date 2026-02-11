---
layout: post
title:  "Predict Bitcoin by reading tweets"
author: abidul
categories: [ Medium ]
image: https://cdn-images-1.medium.com/max/800/1*Cfd8NSkrz6H94F-MEekvYw.jpeg
tags: [medium, import]
---
---

## Predict Bitcoin by reading tweets

![](https://cdn-images-1.medium.com/max/800/1*Cfd8NSkrz6H94F-MEekvYw.jpeg)

A while ago Bitcoin proved it self to be the most volatile crypto there is. who doesn’t know that, right? well everyone does. there’s no point here :P

But, I can certainly make a point by telling you things become volatile because of sudden fast changes happening around us. Let’s try to think about it, what is the thing that is changing so fast everyday that effects everything in all industries?

YOU GUESSED IT! SOCIAL PLATFORMS.People are constantly tweeting, posting, and sharing informations along the milliseconds and that’s effecting their decision to move or not move, to change job, to join a club, and in our case to buy/sell Bitcoin.

![](https://cdn-images-1.medium.com/max/800/1*YJfIzEwyRfy__ZxwMsJtJQ.jpeg)

Knowing this, we *‘means *[*WorldFirst*](http://worldfirst.com/)* Awesome team’* started wondering wether we can use this information to try to give people a tool where they can try to predict tomorrow’s bitcoins behaviour (increasing/decreasing), and help them understand better the elements effecting this behaviour. ***So we gave it a try( we dedicated a day for the project).***

Without further ado, I’ll start explaining the project(checkout the [repository](https://github.com/abdrmdn/BitcoinPrediction)) that was done by us in the next section.

### The project has 4 main parts:

- The core, which is the machine learning part (Python)
- The Api that connects them all (PHP)
- The Client-side part (ReactJS)
- The scraper infrastructure that runs the heavy work (Docker-swarm, GoogleCloud, some nodejs)

### I’ll explain the general process before I dig into details

The user will see a UI, will be prompted an input (some hashtag, and the hashtag represents the pool that the user wants the algorithm to base its information from), the website will send a request to our Prediction API which in turn will call 2 mains services : tweets scraper, and the machine learning script. The scraper will get all the tweets that are related to the hashtag provided by the user, then the machine learning algorithm will basically get the data, preprocess it, and comes up with a prediction based on the data given wether the value will increase or decrease the day after.

Now if you really like to read more details about the processes, you’ll be satisfied after the next section, other-wise whats up there sums it all up :), don’t forget to follow and clap for more interesting articles like these.

## Now lets dig into details to satisfy our geeky side 😄

### 1. The core, which is the machine learning part

The code will basically get tweets, bitcoin values for the same period of the tweets brought, and a dictionary which decides if the tweet brings a good effect or not. After that it will process those tweets and checks the frequencies of those dictionary keywords in the tweets, and tries to build a pattern between those frequency values and the value of the bitcoin the day after that, and that pattern will be our Model. (currently the model is linear, so it can be improved to be more flexible with the prediction)

Using this model, we can bring todays tweets and predict tomorrows bitcoin value. which in turn will show if the value is decreasing or increasing.

### 2. The API that connects them all (PHP)

We were thinking at the beginning of Lumen (a micro-framework by Laravel) and Slim micro-framework, both frameworks are very slim yet so powerful and easy to use. The documentation for both frameworks is well documented.

We've been using Laravel framework for a while which is kinda the father of Lumen so we decided to try something new, we decided to go with Slim PHP micro-framework.

Our first approach is to agree on the API contract, and then we proceeded to create the endpoint for our consumer which is our web client application.

Web client sends a GET request with a #hashtag parameter, then we process the request and send a POST request to our other service called Scrapper. Scrapper then does his magic and get all the data from Twitter and store it in our database, then we send another GET request with the #hashtag to Scrapper to get all the data from the database, we store the results in CSV format and feed it into our Machine Learning service, machine learning service will do the magic and return us the result which is either 0 or 1. 
 — 0 means cryptocurrency is stable or going down.
 — 1 means it's going up. 
Based on that results we will return the response to our web client as per our API contract.

### 3. The Client-side part (ReactJS)

As you can see in the Repository, you can tell that we used ReactJs since its very trendy now, and was a great chance for us to use such a cool framework.
Check the [repository](https://github.com/abdrmdn/BitcoinPrediction/tree/master/hackathon_frontend).

### 4. The scraper infrastructure that runs the heavy work

you can see that we used Docker-swarm, GoogleCloud, and some nodejs to achieve that.
Please refer to the [*documentation*](https://github.com/abdrmdn/BitcoinPrediction/tree/master/hackathon_twitter) for more details
