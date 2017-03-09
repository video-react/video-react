import React, { PropTypes } from 'react';

const propTypes = {
  poster: PropTypes.string,
  player: PropTypes.object,
  actions: PropTypes.object,
};

function PosterImage({ poster, player, actions }) {
  if (!poster || player.hasStarted) {
    return null;
  }

  return (
    <div
      className="video-react-poster"
      style={{
        backgroundImage: `url("${poster}")`,
      }}
      onClick={() => {
        if (player.paused) {
          actions.play();
        }
      }}
    />
  );
}

PosterImage.propTypes = propTypes;

export default PosterImage;
