import React from 'react';
import ReactDOM from 'react-dom';

import { Video } from '../src/index';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Video controls width="640" height="480">
        <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
      </Video>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
