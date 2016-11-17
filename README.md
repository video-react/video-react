
# video-react

Video.React is a web video player built from the ground up for an HTML5 world using React library.

## Installation

Install `video-react` and __peer dependencies__ via NPM

```sh
npm install --save video-react react react-dom
```

Import the components you need, example:

```js
import React from 'react';
import { Player } from 'video-react';

export default (props) => {
  return (
    <Player poster="/assets/poster.png">
      <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
    </Player>
  );
};
```

## Development

Install dependencies:

```sh
npm install
```

Run examples at [http://localhost:9000/](http://localhost:9000/) with webpack dev server:

```sh
npm start
```

Run tests & coverage report:

```sh
npm test
```

Watch tests:

```sh
npm run test-watch
```

## Inspiration & Credits

* This project is heavily inspired by [video.js](http://www.videojs.com).
* The document site is built with [reactstrap](https://github.com/reactstrap/reactstrap).

