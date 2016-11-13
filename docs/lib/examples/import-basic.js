import React from 'react';
import { Player, Source } from 'video-react';

export default (props) => {
  return (
    <Player
      poster="/assets/poster.png"
    >
      <source
        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
      />
    </Player>
  );
};
