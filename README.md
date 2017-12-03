
# video-react
[![npm version](https://badge.fury.io/js/video-react.svg)](https://badge.fury.io/js/video-react) [![Build Status](https://travis-ci.org/video-react/video-react.svg?branch=master)](https://travis-ci.org/video-react/video-react) [![Package Quality](http://npm.packagequality.com/shield/video-react.svg)](http://packagequality.com/#?package=video-react)

Video.React is a web video player built from the ground up for an HTML5 world using React library.


## Installation

Install `video-react` and __peer dependencies__ via NPM

```sh
npm install --save video-react react react-dom redux
```

import css in your app or add video-react styles in your page
```jsx
import "node_modules/video-react/dist/video-react.css"; // import css
```
or
```scss
@import "~video-react/styles/scss/video-react"; // or import scss
```
or
```html
<link rel="stylesheet" href="https://video-react.github.io/assets/video-react.css" />
```

Import the components you need, example:

```js
import React from 'react';
import { Player } from 'video-react';

export default (props) => {
  return (
    <Player>
      <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
    </Player>
  );
};
```

## Development

Run tests:

```sh
npm test
```


### run example to start developing your new component against
npm link # the link commands are important for local development
npm install # disregard any warnings about missing peer dependencies
npm start # runs rollup with watch flag

###  (in another tab)
cd example
npm link video-react # link video-react with `../`
npm install
npm run dev # runs dev server [http://localhost:9000/](http://localhost:9000/)

## Inspiration & Credits

* This project is heavily inspired by [video.js](http://www.videojs.com), and most of our css styles came from [video.js's styles](https://github.com/videojs/video.js/tree/master/src/css).
* The document site is built with [reactstrap](https://github.com/reactstrap/reactstrap).
* All the icons came from [Google Material Icons](https://material.io/icons/)
* Fonts were built by [iconmon](https://icomoon.io/).
* [react-modern-library-boilerplate](https://github.com/transitive-bullshit/react-modern-library-boilerplate)
* [nextjs](https://github.com/zeit/next.js)
