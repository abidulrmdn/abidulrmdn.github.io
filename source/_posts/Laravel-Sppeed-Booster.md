---
title: Laravel Sppeed Booster
date: 2019-07-28 18:49:00
tags:
---

[Source](https://medium.com/swlh/laravel-speed-booster-6babd07d84ab "Permalink to Laravel Speed Booster - The Startup")

Here we go..

So after some investigating and profiling, we found potential places to improve in Laravel:

* Views Pipeline
* Views Rendering
* Too many middleWares
* Routes caching:
* Other PHP optimization

As we said earlier Laravel adds a lot of generic stuff to include all possibilities, in the case of Views it's the loading of data and the checking processes that take place when the render function happens.

To be more specific, one of the overheads that happen on every render is the function **gatherData **in **IlluminateView**, which is usually a lot btw, if you have a very nested structure for your website i.e. a lot of @includes, @sections, @layouts, @for loops,..,.etc.

You'd find inside this function the following code:
    
    
    $data = array_merge($this->factory->getShared(), $this->data);**foreach **($data **as **$key => $value) {  
    **if **($value **instanceof **Renderable) {  
    $data[$key] = $value->render();  
    }  
    }**return **$data;

And in my experience, few people use the Views with Renderable passed.

So what would be awesome is to override Laravel's functionality [I'm not going to mention how; a lot of hows on google for this] and make the code as below:
    
    
    **protected function **gatherData()  
    {  
    $data = array_merge($this->factory->getShared(), $this->data);
    
    **return **$data;  
    }

After doing this, you'll notice an increase in performance, which varies based on your server's speed/page size/so on.

The increment in our case was about 5–10% [around 20ms] of the server-side load time.

Views Rendering as mentioned above is something that happens a lot during 1 session call, and the thing is that the pipeline of this [Render function][1] is that it works in a recursive way.

That is normal if you have a page that contains a couple of sections and not a lot of nested views.but, if you use a lot of @includes / @sections , especially the ones inside ForLoops then you'd probably have a big decrement in speed.

let's put it this way, if you have 100 products in a page, it will be something like this :
    
    
    **@foreach (**$products **as **$key => $item)**  
    @include(  
    **'productView',  
    [  
    'product' => $item,  
    ]  
    **)  
    @endforeach**

and let's say inside the productView there are 2 other includes. this case will result in 200 render calls when the view is rendered.  
And after we profiled our application we found that the speed decreases significantly because of this. the solutions to solve this is to either:

* Set a standard to avoid more than 2 nested levels to avoid too many rendering.
* Flatten your views and use less includes (which of course is not a nice solution esp. if it's a platform that is maintained over a long time).
* Use a library that will flatten your views on Production Deployment process (Since I didn't find a package that does that, so I wrote one [Compile-Blades][2]).  
(Do note that if you have too much of code in your blade it will also create a big decrement in speed, so you have to choose a middle ground).

Maybe you know, maybe you don't that Laravel has a lot of pipelines overhead when it comes to its main feature, so I'd suggest not to use a lot of Middlewares since have pre&post calls to every MiddleWare. I would go for 5 max middleWares as a best practice.

I will quote what **Ionuț Băjescu** said in an article which was explained better than I'll ever do : ([**improving Laravel performance**][3])

> Routing is also an expensive task in laravel. To cache the routes.php file run the below command:
> 
> `_php artisan route:cache_`
> 
> Mind that it doesn't work with closures. In case you're using closures this is a great chance to move them into a controller, as the artisan command will throw an exception when trying to compile routes that are bound to closures instead of proper controller methods.   
In the same as the config cache, any changes to routes.php will not have any effect anymore. To refresh the cache, run the above command everytime you do a change to the routes file. To completely get rid of the route cache, run the below command:
> 
> `_php artisan route:clear_`

A couple of other stuff to check, which will improve your website speed significantly are:

* Config caching
* Classmap optimization
* Optimizing the composer autoload

Those can be also checked out in this [technically detailed article][3].

In my experience, if you do all those and u didn't have them before, you'd gain an improvement of 20–50% in your server page load time.

**Fyi, you should really buy one of those [****programmers laptop/workstation stickers**][4]**, they're amazing 😍.**

**Other Useful Articles:**

[1]: https://laravel.com/api/5.3/Illuminate/View/View.html?source=post_page---------------------------#method_render
[2]: https://github.com/Te-cho/compile-blades?source=post_page---------------------------
[3]: https://bajescu.com/posts/view/improving-your-laravel-application-performance?source=post_page---------------------------
[4]: http://tidd.ly/8f345c71?source=post_page---------------------------

  