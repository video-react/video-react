import React from 'react';
import { Player, ControlBar, PlayToggle } from 'video-react';

export default props => {
  return (
    <Player
      autoPlay
      poster="/assets/poster.png"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    >
      <ControlBar autoHide={false} disableDefaultControls={true}>
        <PlayToggle />
      </ControlBar>
    </Player>
  );
};
