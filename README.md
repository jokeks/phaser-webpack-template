# What is this?
A basic example of a webpack configuration for phaser. Develop in JavaScript and TypeScript as you want, feel free to add more.

Include assets(.ogg/.mp3/.png/.json) with require('path/to') and they will be automatically copied/mapped and renamed to the build folder.

If you ship your game, you could add an [uglifyjs](https://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin) and a [CDN path](https://github.com/webpack/docs/wiki/configuration#outputpublicpath) to assets.
## Install
```
npm install -g webpack
npm install
```

## Compile
```
webpack
```

## Develop
Bundle changes to build, after saving.
```
webpack --watch
```
## Run
Start a webserver and browse to index.html

