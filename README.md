# video-react

[![npm version](https://badge.fury.io/js/video-react.svg)](https://badge.fury.io/js/video-react) [![Build Status](https://travis-ci.org/video-react/video-react.svg?branch=master)](https://travis-ci.org/video-react/video-react) [![Package Quality](http://npm.packagequality.com/shield/video-react.svg)](http://packagequality.com/#?package=video-react)
[![codecov](https://codecov.io/gh/video-react/video-react/branch/master/graph/badge.svg)](https://codecov.io/gh/video-react/video-react)

Video.React is a web video player built from the ground up for an HTML5 world using React library.

## Installation

Install `video-react` and **peer dependencies** via NPM

```sh
npm install --save video-react react react-dom
```

import css in your app or add video-react styles in your page

```jsx
import '~video-react/dist/video-react.css'; // import css
```

or

```scss
@import '~video-react/styles/scss/video-react'; // or import scss
```

or

```html
<link
  rel="stylesheet"
  href="https://video-react.github.io/assets/video-react.css"
/>
```

Import the components you need, example:

```js
import React from 'react';
import { Player } from 'video-react';

export default props => {
  return (
    <Player>
      <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
    </Player>
  );
};
```

## Browser support

| Browser | Windows  |  Mac  | Linux | Android  |    iOS     |
| :-----: | :------: | :---: | :---: | :------: | :--------: |
| Chrome  |  **Y**   | **Y** | **Y** |  **Y**   | **Native** |
| Firefox |  **Y**   | **Y** | **Y** | untested | **Native** |
|  Edge   |  **Y**   |   -   |   -   |    -     |     -      |
|  IE 11  | untested |   -   |   -   |    -     |     -      |
| Safari  |    -     | **Y** |   -   |    -     |   **Y**    |

Please note that only the latest stable version is tested and supported. Video-react may be usable in older releases, and we will accept pull requests for them, but they will not be frequently tested or actively supported.

For the items marked as "untested", we do welcome volunteer testers.

## Development

Run tests:

```sh
npm test
```

### Run from local

```bash
$ npm install
$ npm start
```

## Contribution

Interested in making contribution to this project? Want to report a bug? Please read the [contribution guide](./CONTRIBUTION.md).

## Inspiration & Credits

- This project is heavily inspired by [video.js](http://www.videojs.com), and most of our css styles came from [video.js's styles](https://github.com/videojs/video.js/tree/master/src/css).
- The document site is built with [reactstrap](https://github.com/reactstrap/reactstrap).
- All the icons came from [Google Material Icons](https://material.io/icons/)
- Fonts were built by [iconmon](https://icomoon.io/).
