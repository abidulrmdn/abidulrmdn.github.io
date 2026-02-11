---
layout: post
title:  "Copy and flatten nested s3 files structure"
author: abidul
categories: [ Medium ]
tags: [medium, import]
---
---

## Copy and flatten nested s3 files structure

This will be a very straightforward blog:

I’ve been looking for something that can flatten a huge number of files structured in a very nested way.

Eventually, I found that it's easier just to write a small script to do that, the script goes as below (the script is in python language):

# -*- coding: utf-8 -*-
"""
This script will copy files from src file in ur bucket to dst in a specified bucket
"""from boto.s3.connection import S3Connection
import os
# to fix issue with get_bucket
# [https://github.com/boto/boto/issues/2836](https://github.com/boto/boto/issues/2836)
import ssl
if hasattr(ssl, '_create_unverified_context'):
   ssl._create_default_https_context = ssl._create_unverified_context
###
   
AWS_KEY = 'your aws key here'
AWS_SECRET = 'your aws secret here'
   
conn = S3Connection(AWS_KEY,AWS_SECRET)
bucket = conn.get_bucket('bucket.name.origin_ex_eu-west');for key in bucket.list(prefix='sourceFolder/'):
    print key.name
    path, folder = os.path.split(key.name)
    if folder != "":
        key.copy(key.bucket, 'destinationFolder/'+folder)**prerequisite :** python 2.7, python editor, s3 accessThe output/input :

Source folder will be for example:

- Bucket/sourceFile/0.pdf
- Bucket/sourceFile/1.pdf
- Bucket/sourceFile/2/2.pdf
- Bucket/sourceFile/3/3ier/3.pdf

Then the destination will be after running the script:

- Bucket/sourceFile/0.pdf
- Bucket/sourceFile/1.pdf
- Bucket/sourceFile/2.pdf
- Bucket/sourceFile/3.pdf

As you can see, the script is pretty straightforward, but the result is quite useful.
