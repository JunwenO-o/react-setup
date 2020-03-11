# Wepack configuration

## File structure

1. webpack.common.js

   - common settings for webpack including Entry/Output/Devserver/Loaders

2. webpack.dev.js

   - webpack settings for development mode

3. webpack.prod.js

   - webpcack settings for production mode

## Loader used

**Webpack can only recognize .js files so need loader to bundle other files in the project. The order wepack uses loader is DESC in one test regular expression**
_Reference:_
<https://www.jianshu.com/p/ad99b2479bee>
<https://webpack.js.org/loaders/>

1. CSS loader: npm install css-loader style-loader node-sass postcss-loader sass-loader autoprefixer --save-dev

   - css-loader used to load .css files
   - style-loader used to insert css style into html
   - node-sass& sass-loader used to load .scss files
   - postcss-loader & autoprefixer used to automatically add prefix for different browser

2. File loader: npm install file-loader url-loader --save-dev

   - file-loader used to load static files like images and font-style and saved as seperate file.
   - url-loader used to load images and pack images into Base64 into the js files. Normally it will make the js files too big to load, limitation is needed so that only small files pack into Base64.

3. JSX loader: npm install babel-loader --save-dev

   - babel-loader used to load JSX and ES6

## Plugins

1. uglifyjs-webpack-plugin

   - webpack4 no longer needs uglifyjs-webpack-plugin, using optimization.minimize = true instead. Production mode default has this settings.
   - webpack3 needs uglifyjs-webpack-plugin to optimaize bundle

   ```javascript

     new UglifyJSPlugin({
     parallel: true,
     cache: true,
     compress: {
       drop_console: true,// remove console
       reduce_vars: true,
     },
     output: {
       comment: false, // remove comment
       beautify: false, // neet code
     },
   }),
   ```

2. commonChunkPlugins

   - webpack4 uses optimization.splitChunks to bundle common chuncks
   - webpack3 uses plugins-webpack.optimize.CommonsChunkPlugin _<https://segmentfault.com/a/1190000012828879?utm_source=tag-newest>_
