import React, { Component } from 'react';
import { Player, ControlBar, PlaybackRateMenuButton } from 'video-react';

export default class PlaybackRateMenuButtonExmaple extends Component {
  componentDidMount() {
    this.player.playbackRate = 2;
    this.forceUpdate();
  }

  render() {
    return (
      <Player
        ref={c => {
          this.player = c;
        }}
        playsInline
        poster="https://video-react.js.org/assets/poster.png"
      >
        <source
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          type="video/mp4"
        />
        <ControlBar>
          <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} />
        </ControlBar>
      </Player>
    );
  }
}
