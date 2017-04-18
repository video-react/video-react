import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import { formatTime } from '../../utils';

const propTypes = {
  player: PropTypes.object,
  className: PropTypes.string,
};

function DurationDisplay({ player: { duration }, className }) {
  const formattedTime = formatTime(duration);
  return (
    <div
      className={classNames(className, 'video-react-duration video-react-time-control video-react-control')}
    >
      <div
        className="video-react-duration-display"
        aria-live="off"
      >
        <span className="video-react-control-text">Duration Time </span>
        {formattedTime}
      </div>
    </div>
  );
}

DurationDisplay.propTypes = propTypes;

export default DurationDisplay;
