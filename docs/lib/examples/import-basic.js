import React from 'react';
import { Player } from 'video-react';

export default (props) => {
  return (
      <Player
        source="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        poster="/assets/poster.png"
      />
  );
};
