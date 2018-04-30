# Jekyll + Webpack + React

**Warning: Broken English below!**  

Before I made this...  

I learnd Jekyll from the [docs](https://jekyllrb.com/docs/home/)  
Learned Jekyll + Webpack + React from [this Medium](https://medium.com/@allizadrozny/using-webpack-and-react-with-jekyll-cfe137f8a2cc)(I read it before I learned how to use Webpack) to see if it is possible to use Jekyll with React. Yes! It is.  
Learned basic Webpack from its [docs](https://webpack.js.org/guides/getting-started/). From chapter 'Getting Started' to 'Development' which I created another repo when I was learning it at [webpack-demo](https://github.com/nawawishkid/webpack-demo)  
And lastly, I read [this blog](https://www.valentinog.com/blog/react-webpack-babel/) on how to set up React, Webpack 4, and Babel (2018) (very easy to understand).  

So, if you're not familiar with the 3 main things I mentioned above, it may be difficult to grasp the whole repo.  I suggest you to learn Jekyll, Webpack, and React first. Just basic understanding of it will make your life easier.
<hr>

When I integrated Jekyll and Webpack, there was a problem, the Jekyll server get an error 
```Error: `/' not found```
I tried changing `base_url` value in `_config.yml` to be `'/public'` but it didn't work. I found out that because I'd run Jekyll server in detach mode (on background). I decided to restart the server but the doc gave me no idea on how to did it. Then, I found this StackOverflow answer:

To stop Jekyll running server running in detach mode (running in background)
```bash
ps aux | grep jekyll | awk '{print $2}' | xargs kill -9
```
- https://stackoverflow.com/a/32803906/6734629

and just re-serve it
```bash
jekyll serve
```

It works now!