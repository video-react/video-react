import React, { PropTypes } from 'react';

const propTypes = {
  player: PropTypes.object,
  hidden: PropTypes.bool,
};

export default function LoadingSpinner({ player, hidden }) {
  if (
    !player.hasStarted ||
    (!player.seeking && !player.waiting)
  ) {
    return null;
  }

  return (
    <div className={hidden ? "" : "video-react-loading-spinner"}/>
  );
}

LoadingSpinner.propTypes = propTypes;
