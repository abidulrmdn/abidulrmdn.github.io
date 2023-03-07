---
layout: post
title:  "8 Interesting AWS Services"
author: abidul
categories: [ tech, cloud]
image: https://miro.medium.com/v2/resize:fit:1400/format:webp/0*X9Uweqmky_grErzM.png
tags: [aws, list, tools, cloud]
---
# 8 Interesting AWS Services
![..](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*X9Uweqmky_grErzM.png)
I’ve used a lot of AWS services lately, and I’ve come across multiple interesting services in AWS.

Most of them are related to cost management&saving, and security.

Here are a few of them:
![..](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*fOVWtZcsNEaCv9bV.png)
The [AWS Well-Architected Tool](https://aws.amazon.com/architecture/well-architected/) helps you review the state of your workloads and compares them to the latest AWS architectural best practices. The tool is based on the AWS Well-Architected Framework, developed to help cloud architects build secure, high-performing, resilient, and efficient application infrastructure. This Framework provides a consistent approach for customers and partners to evaluate architectures, has been used in tens of thousands of workload reviews conducted by the AWS solutions architecture team, and provides guidance to help implement designs that scale with application needs over time.

[AWS Well-Architected Tool - Amazon Web Services](https://aws.amazon.com/well-architected-tool/)

## AWS Inspector
![..](https://miro.medium.com/v2/resize:fit:1266/format:webp/0*JhJ4IRhusIFxrssw.png)
Amazon Inspector is an automated security assessment service that helps improve the security and compliance of applications deployed on AWS. Amazon Inspector automatically assesses applications for exposure, vulnerabilities, and deviations from best practices. After performing an assessment, Amazon Inspector produces a detailed list of security findings prioritized by level of severity. These findings can be reviewed directly or as part of detailed assessment reports which are available via the Amazon Inspector console or API.

[Amazon Inspector - Amazon Web Services (AWS)](https://aws.amazon.com/inspector/)

##Athena & Glue
![..](https://miro.medium.com/v2/resize:fit:500/format:webp/0*NFgr_SxDaI_YG_7J.png)
Amazon Athena is an interactive query service that makes it easy to analyze data in Amazon S3 using standard SQL. Athena is serverless, so there is no infrastructure to manage, and you pay only for the queries that you run.

Athena is easy to use. Simply point to your data in Amazon S3, define the schema, and start querying using standard SQL. Most results are delivered within seconds. With Athena, there’s no need for complex ETL jobs to prepare your data for analysis. This makes it easy for anyone with SQL skills to quickly analyze large-scale datasets.

Athena is out-of-the-box integrated with [AWS Glue](https://aws.amazon.com/glue/) Data Catalog, allowing you to create a unified metadata repository across various services, crawl data sources to discover schemas, and populate your Catalog with new and modified table and partition definitions, and maintain schema versioning.

[Amazon Athena - Serverless Interactive Query Service - Amazon Web Services](https://aws.amazon.com/athena/?whats-new-cards.sort-by=item.additionalFields.postDateTime&whats-new-cards.sort-order=desc)

## Amazon Mechanical Turk
Amazon Mechanical Turk is a forum where Requesters post work as Human Intelligence Tasks (HITs). Workers complete HITs in exchange for a reward. You write, test, and publish your HIT using the Mechanical Turk developer sandbox, Amazon Mechanical Turk APIs, and AWS SDKs.

Here are some common tasks posted by Requesters:
- Localization and transcription services
- Audio editing
- Information gathering tasks (surveys)
- Machine learning
[Introduction to Amazon Mechanical Turk](https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMechanicalTurkGettingStartedGuide/SvcIntro.html)

## Cloud 9
![..](https://miro.medium.com/v2/resize:fit:800/format:webp/0*B3ykb_Mb-9rEwYT4.png)
AWS Cloud9 is a cloud-based integrated development environment (IDE) that lets you write, run, and debug your code with just a browser. It includes a code editor, debugger, and terminal. Cloud9 comes prepackaged with essential tools for popular programming languages, including JavaScript, Python, PHP, and more, so you don’t need to install files or configure your development machine to start new projects. Since your Cloud9 IDE is cloud-based, you can work on your projects from your office, home, or anywhere using an internet-connected machine. Cloud9 also provides a seamless experience for developing serverless applications enabling you to easily define resources, debug, and switch between local and remote execution of serverless applications. With Cloud9, you can quickly share your development environment with your team, enabling you to pair program and track each other’s inputs in real-time.

[AWS Cloud9 Amazon Web Services](https://aws.amazon.com/cloud9/)

## AWS CloudFormation
![...](https://miro.medium.com/v2/resize:fit:1024/format:webp/0*DDmK61LTaswzreyU.png)
AWS CloudFormation gives you an easy way to model a collection of related AWS and third-party resources, provision them quickly and consistently, and manage them throughout their lifecycles, by treating infrastructure as code. A CloudFormation template describes your desired resources and their dependencies so you can launch and configure them together as a stack. You can use a template to create, update, and delete an entire stack as a single unit, as often as you need to, instead of managing resources individually. You can manage and provision stacks across multiple AWS accounts and AWS Regions.

[AWS CloudFormation - Infrastructure as Code & AWS Resource Provisioning](https://aws.amazon.com/cloudformation/?nc2=type_a)	

## AWS Key Management
![img](https://miro.medium.com/v2/resize:fit:320/0*Y3zPpo_Rh2Uu1meJ)
AWS Key Management Service (KMS) makes it easy for you to create and manage cryptographic keys and control their use across a wide range of AWS services and in your applications. AWS KMS is a secure and resilient service that uses hardware security modules that have been validated under FIPS 140–2, or are in the process of being validated, to protect your keys. AWS KMS is integrated with AWS CloudTrail to provide you with logs of all key usage to help meet your regulatory and compliance needs.

[Key Management Service - Amazon Web Services (AWS)](https://aws.amazon.com/kms/)

## AWS Cost Explorer
AWS Cost Explorer has an easy-to-use interface that lets you visualize, understand, and manage your AWS costs and usage over time.

[AWS Cost Explorer - Amazon Web Services](https://aws.amazon.com/aws-cost-management/aws-cost-explorer/?nc2=h_ql_prod_cm_cex)
---
I really hope this list helped you most to improve you cost and security of your product.