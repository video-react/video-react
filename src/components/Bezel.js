import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';


const propTypes = {
  player: PropTypes.object,
};


export default class Bezel extends Component {
  constructor(props, context) {
    super(props, context);

    this.timer = null;

    this.state = {
      hidden: true,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.player.bezelCount !== prevProps.player.bezelCount) {
      if (this.timer) {
        clearTimeout(this.timer);
      }

      if (this.state.hidden) {
        this.setState({
          hidden: false,
        });
      } else {
        this.setState({
          hidden: true,
        });

        setTimeout(() => {
          this.setState({
            hidden: false,
          });
        }, 0);
      }

      this.timer = setTimeout(() => {
        this.setState({
          hidden: true,
        });
      }, 500);
    }
  }

  render() {
    const { player } = this.props;
    if (!player.bezelCount || !player.bezelStatus) {
      return null;
    }
    const style = this.state.hidden ? {
      display: 'none'
    } : null;

    return (
      <div
        className="video-react-bezel"
        style={style}
        role="status"
        aria-label={player.bezelStatus}
      >
        <div className={classNames('video-react-bezel-icon', `video-react-bezel-icon-${player.bezelStatus}`)} />
      </div>
    );
  }
}
