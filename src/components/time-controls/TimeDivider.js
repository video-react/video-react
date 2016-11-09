import React, { PropTypes } from 'react';

const propTypes = {
  separator: PropTypes.string,
};

export default function TimeDivider({ separator }) {
  const separatorText = separator || '/';
  return (
    <div
      className="video-react-time-control video-react-time-divider"
      dir="ltr"
    >
      <div><span>{separatorText}</span></div>
    </div>
  );
}

TimeDivider.propTypes = propTypes;
