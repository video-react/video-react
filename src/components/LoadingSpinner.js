import React, { PropTypes } from 'react';

const propTypes = {
  player: PropTypes.object,
};

export default function LoadingSpinner({ player }) {
  if (
    !player.hasStarted ||
    (!player.seeking && !player.waiting)
  ) {
    return null;
  }

  return (
    <div className="video-react-loading-spinner" />
  );
}

LoadingSpinner.propTypes = propTypes;
