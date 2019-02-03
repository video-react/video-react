import React from 'react';
import { Player, ControlBar } from 'video-react';

export default props => {
  return (
    <Player autoPlay src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
      <ControlBar autoHide={false} className="my-class" />
    </Player>
  );
};
