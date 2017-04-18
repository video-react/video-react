import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import { formatTime } from '../../utils';

const propTypes = {
  player: PropTypes.object,
  className: PropTypes.string,
};

function RemainingTimeDisplay({ player: { currentTime, duration }, className }) {
  const remainingTime = duration - currentTime;
  const formattedTime = formatTime(remainingTime);
  return (
    <div
      className={classNames('video-react-remaining-time video-react-time-control video-react-control', className)}
    >
      <div
        className="video-react-remaining-time-display"
        aria-live="off"
      >
        <span className="video-react-control-text">Remaining Time </span>
        -{formattedTime}
      </div>
    </div>
  );
}

RemainingTimeDisplay.propTypes = propTypes;

export default RemainingTimeDisplay;
