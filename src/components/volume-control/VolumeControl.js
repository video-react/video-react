import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import VolumeBar from './VolumeBar';

const propTypes = {
  className: PropTypes.string,
};

export default function VolumeControl({ className }) {
  return (
    <div
      className={classNames(className, 'video-react-volume-control video-react-control')}
    >
      <VolumeBar {...this.props} />
    </div>
  );
}

VolumeControl.propTypes = propTypes;
