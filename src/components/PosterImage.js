import React, { PropTypes } from 'react';

const propTypes = {
  poster: PropTypes.string,
  player: PropTypes.object,
};

function PosterImage({ poster, player }) {
  if (!poster || player.hasStarted) {
    return null;
  }

  return (
    <div
      className="poster"
      tabIndex="-1"
      style={{
        backgroundImage: `url("${poster}")`,
      }}
    />
  );
}

PosterImage.propTypes = propTypes;

export default PosterImage;
