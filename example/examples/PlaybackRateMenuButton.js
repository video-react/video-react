import React from 'react';
import {
  Player, ControlBar, PlaybackRateMenuButton
} from 'video-react';

export default (props) => {
  return (
    <Player
      autoPlay
      src="http://media.w3.org/2010/05/bunny/movie.mp4"
    >
      <ControlBar autoHide={false}>
        <PlaybackRateMenuButton
          rates={[5, 3, 1.5, 1, 0.5, 0.1]}
          order={7.1}
        />
      </ControlBar>
    </Player>
  );
};
