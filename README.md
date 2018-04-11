## Website Performance Optimization portfolio project


### Getting started

This project is divided into two folders:
src - This folder contains the source code
dist - This folder contains the production code and contains a post task runner version of the source code


#### Installing the Project
1. Clone the repository
2. This Project uses Grunt as a task runner,If you are not familiar with grunt, you can read more about it [here](https://gruntjs.com/getting-started). Make sure you have grunt-cli and npm installed
3. Run 'npm install' and all the dependencies will get downloaded
4. use 'grunt' to run the task runner.
5. To serve your files you may use http-server from Node in the following way
  - Run npm install -g http-server.
  - Serve files with http-server ~/Documents/mysite -p 8000 (replace ~/Documents/mysite with the path to your project's directory!).
  - Navigate your browser to http://localhost:8000 to test!




#### Part 1: Optimize PageSpeed Insights score for index.html

This project is hosted on github pages, and this URL - http://pranavjain.info/frontend-nanodegree-mobile-portfolio/dist/index.html
can be used to find out the PageSpeed wpL3FuNA41GYXx7Sfljw5cPOrGAbEl3JHUp5dW

Optimizations Done:

1. Minification of HTML,CSS and JS - All the resourcses were minified using the following tasks from grunt (htmlmin,cssmin and uglify)
2. Image resources were compressed so that they can be downloaded quickly
3. CSS was inlined using a grunt task as external CSS is a render blocking resource



#### Part 2: Optimize Frames per Second in pizza.html

To optimize views/pizza.html, you will need to modify views/js/main.js until your frames per second rate is 60 fps or higher. You will find instructive comments in main.js.

You might find the FPS Counter/HUD Display useful in Chrome developer tools described here: [Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks).

### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>
