
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

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Player poster="img/poster.png" width="640" height="480">

      </Player>
    );
  }
}
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
