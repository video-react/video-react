import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const propTypes = {
  actions: PropTypes.object
};

const OptionsButton = props => {
  return (
    <button
      type="button"
      data-testid="test-options-icon"
      className={classNames('video-react-options-button', props.className)}
      onClick={() => props.actions.handleOptionsOverlayChange()}
    >
      <span className="video-react-control-text">Audio and CC</span>
    </button>
  );
};

OptionsButton.propTypes = propTypes;
OptionsButton.displayName = 'OptionsButton';
export default OptionsButton;
