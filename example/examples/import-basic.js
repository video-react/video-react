import React from 'react';
import { Player } from 'video-react';

export default () => {
  return (
    <Player
      playsInline
      poster="/static/poster.png"
    >
      <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" type="video/mp4" />
    </Player>
  );
};
