var React = require('react');
var ReactDOMServer = require('react-dom/server');
var videoReact = require('video-react');
var Player = videoReact.Player;


class MyComponent extends React.Component {
  render() {
    <Player
      source="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
      poster="/assets/poster.png"
      width={640}
      height={480}
    />
  }
}

ReactDOMServer.renderToString(<MyComponent />);
