---
layout: post
title:  "PHP — Migrate to Multi-Byte string"
author: abidul
categories: [ Medium ]
image: https://cdn-images-1.medium.com/max/1200/1*jbFWcnSlZ6NU4p7GPjJomA.jpeg
tags: [medium, import]
---
---

## PHP — Migrate to Multi-Byte string functions

Easily migrate to mb_ string functions in PHP

![](https://cdn-images-1.medium.com/max/1200/1*jbFWcnSlZ6NU4p7GPjJomA.jpeg)

A while ago we decided to do a migration from normal string functions to multi-byte functions like `mb_substr` and other mb_* functions cause we wanted to support Korean and other Asian languages in our platform.

### Multi-byte Functions

PHP by default doesn’t support multi-byte strings, meaning if you put a char that has the size of 2 bytes it would process it weirdly and give you unexpected results.

## HOW DID WE DO IT

We ran a script ;)

The script below basically looks for all functions that must be multi-byte sensitive and replaces them with the mb_ alternative.

#!/bin/bashexport NON_MB_FUNCTIONS="strtolower check_encoding chr convert_case convert_encoding convert_kana convert_variables decode_mimeheader decode_numericentity detect_encoding detect_order encode_mimeheader encode_numericentity encoding_aliases ereg_match ereg_replace_callback ereg_replace ereg_search_getpos ereg_search_getregs ereg_search_init ereg_search_pos ereg_search_regs ereg_search_setpos ereg_search ereg eregi_replace eregi get_info http_input http_output internal_encoding language list_encodings ord output_handler parse_str preferred_mime_name regex_encoding regex_set_options scrub send_mail split strcut strimwidth stripos stristr strlen strpos strrchr strrichr strripos strrpos strstr strtolower strtoupper strwidth substitute_character substr_count substr"find $1 -type f -name "*.php"  > phpfiles.list 
for FUNC in $NON_MB_FUNCTIONS
do
     echo "Replacing $FUNC with mb_$FUNC"
     cat phpfiles.list | while read PHPFILE
     do
        sed -i "s/\b$FUNC(/mb_$FUNC(/g" $PHPFILE
     done     
     echo "------------------------"
doneYou store this script in a .sh file, give it executable mode

chmod +x scriptfile.shThen run it with the path you want to scout and replace all functions in. ex.

replacetomb.sh ./
## PHP Default Support

**Yes,** you can use function Overloading (in the past though) cause its deprecated and it causes issues

[**PHP: Function Overloading Feature — Manual**
*mbstring supports a ‘function overloading’ feature which enables you to add multibyte awareness to such an application…*www.php.net](https://www.php.net/manual/en/mbstring.overload.php)[](https://www.php.net/manual/en/mbstring.overload.php)
what this does, is that it automatically process string functions as multi-byte functions. and this just needs to be enabled by the PHP INI file.

But, since it's pretty risky, PHP people decided to disable this and force those who want multi-byte to explicitly use mb_ functions.

## All In All

If you don’t really need those I’d suggest not to use mb_ functions cause this means more memory being used in your application for no used purpose.

and if you run the script, make sure you put a rule for it in your code sniffer, so people won't use old functions again.

And as always, hope this was useful to you. :)
