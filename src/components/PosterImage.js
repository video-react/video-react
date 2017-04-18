import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const propTypes = {
  poster: PropTypes.string,
  player: PropTypes.object,
  actions: PropTypes.object,
  className: PropTypes.string,
};

function PosterImage({ poster, player, actions, className }) {
  if (!poster || player.hasStarted) {
    return null;
  }

  return (
    <div
      className={classNames(
        'video-react-poster',
        className
      )}
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
