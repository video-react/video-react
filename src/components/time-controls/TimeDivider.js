import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const propTypes = {
  separator: PropTypes.string,
  className: PropTypes.string,
};

export default function TimeDivider({ separator, className }) {
  const separatorText = separator || '/';
  return (
    <div
      className={classNames('video-react-time-control video-react-time-divider', className)}
      dir="ltr"
    >
      <div><span>{separatorText}</span></div>
    </div>
  );
}

TimeDivider.propTypes = propTypes;
