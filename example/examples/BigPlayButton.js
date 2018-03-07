import React from 'react';
import { Player, BigPlayButton } from 'video-react';

export default (props) => {
  return (
    <Player>
      <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" type="video/mp4" />
      <BigPlayButton position="center" />
    </Player>
  );
};
