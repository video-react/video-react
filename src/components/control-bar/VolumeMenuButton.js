import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';

import PopupButton from '../popup/PopupButton';
import VolumeBar from '../volume-control/VolumeBar';
import { mergeAndSortChildren } from '../../utils';

const propTypes = {
  player: PropTypes.object,
  actions: PropTypes.object,
  vertical: PropTypes.bool,
  className: PropTypes.string,
  alwaysShowVolume: PropTypes.bool,
  children: PropTypes.node
};

const defaultProps = {
  vertical: false
};

class VolumeMenuButton extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      active: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.getDefaultChildren = this.getDefaultChildren.bind(this);
  }

  get volumeLevel() {
    const {
      player: { volume, muted }
    } = this.props;
    let level = 3;
    if (volume === 0 || muted) {
      level = 0;
    } else if (volume < 0.33) {
      level = 1;
    } else if (volume < 0.67) {
      level = 2;
    }
    return level;
  }

  handleClick() {
    const { player, actions } = this.props;
    actions.mute(!player.muted);
  }

  handleFocus() {
    this.setState({
      active: true
    });
  }

  handleBlur() {
    this.setState({
      active: false
    });
  }

  getDefaultChildren() {
    return [
      <VolumeBar
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        {...this.props}
      />
    ];
  }

  getChildren() {
    const children = React.Children.toArray(this.props.children);
    const defaultChildren = this.getDefaultChildren();
    const { className, ...parentProps } = this.props; // remove className
    return mergeAndSortChildren(defaultChildren, children, parentProps);
  }

  render() {
    const { vertical, player, className } = this.props;
    const inline = !vertical;
    const level = this.volumeLevel;

    const children = this.getChildren();

    return (
      <PopupButton
        className={classNames(
          className,
          {
            'video-react-volume-menu-button-vertical': vertical,
            'video-react-volume-menu-button-horizontal': !vertical,
            'video-react-vol-muted': player.muted,
            'video-react-vol-0': level === 0 && !player.muted,
            'video-react-vol-1': level === 1,
            'video-react-vol-2': level === 2,
            'video-react-vol-3': level === 3,
            'video-react-slider-active':
              this.props.alwaysShowVolume || this.state.active,
            'video-react-lock-showing':
              this.props.alwaysShowVolume || this.state.active
          },
          'video-react-volume-menu-button'
        )}
        onClick={this.handleClick}
        inline={inline}
      >
        {children}
      </PopupButton>
    );
  }
}

VolumeMenuButton.propTypes = propTypes;
VolumeMenuButton.defaultProps = defaultProps;
VolumeMenuButton.displayName = 'VolumeMenuButton';
export default VolumeMenuButton;
