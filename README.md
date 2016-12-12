# What is this?
A basic example of a webpack configuration for phaser. Develop in JavaScript and TypeScript as you want, feel free to add more.

Include assets(.ogg/.mp3/.png/.json) with require('path/to') and they will be automatically copied/mapped and renamed to the build folder.

If you ship your game, you could add a [CDN path](https://github.com/webpack/docs/wiki/configuration#outputpublicpath).
## Install
Install dependencies and requirements:
```
npm install -g webpack
npm install
```

## Build: Release

Builds all assets and bundles + minimize the javascript into the release folder.
This uses the webpack.release.config.js.
```
npm run release
```

## Develop

Start a development server on localhost:3000. Access the game via localhost:3000/index.html.
Changes are immediately published and pushed to the browser, excluding index.html.
```
npm run dev
```


