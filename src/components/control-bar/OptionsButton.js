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
      role="button"
      aria-label="options"
      data-testid="test-options-icon"
      className={classNames('video-react-options-button', props.className)}
      onClick={() => props.actions.handleOptionsOverlayChange()}
    ></a>
  );
};

OptionsButton.propTypes = propTypes;
OptionsButton.displayName = 'OptionsButton';
export default OptionsButton;
