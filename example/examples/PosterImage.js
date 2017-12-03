import React from 'react';
import { Player, PosterImage } from 'video-react';

export default (props) => {
  // set the poster image url to `poster` property
  return (
    <Player
      poster="/static/poster.png"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    />
  );
};
