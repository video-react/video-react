import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import { formatTime } from '../../utils';

const propTypes = {
  player: PropTypes.object,
  className: PropTypes.string,
};

function CurrentTimeDisplay({ player: { currentTime, duration }, className }) {
  const formattedTime = formatTime(currentTime, duration);
  return (
    <div
      className={classNames('video-react-current-time video-react-time-control video-react-control', className)}
    >
      <div
        className="video-react-current-time-display"
        aria-live="off"
      >
        <span className="video-react-control-text">Current Time </span>
        {formattedTime}
      </div>
    </div>
  );
}

CurrentTimeDisplay.propTypes = propTypes;

export default CurrentTimeDisplay;
