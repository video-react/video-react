import React from 'react';
import { Player, ControlBar } from 'video-react';

export default (props) => {
  return (
    <Player
      autoPlay
    >
      <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" type="video/mp4" />
      <ControlBar autoHide={false} className="my-class" />
    </Player>
  );
};
