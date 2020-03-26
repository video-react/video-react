import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const propTypes = {
  actions: PropTypes.object
};

const OptionsButton = props => {
  return (
    <a
      type="button"
      className={classNames('video-react-closed-caption', props.className)}
      onClick={() => props.actions.handleOptionsOverlayChange()}
    ></a>
  );
};

OptionsButton.propTypes = propTypes;
OptionsButton.displayName = 'OptionsButton';
export default OptionsButton;
