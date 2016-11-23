import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';


const propTypes = {
  manager: PropTypes.object,
  player: PropTypes.object,
  actions: PropTypes.object,
};


export default class Bezel extends Component {
  constructor(props, context) {
    super(props, context);

    this.timer = null;
    props.manager.subscribeToOperationStateChange(this.handleStateChange.bind(this));

    this.state = {
      hidden: true,
      operation: {},
    };
  }

  handleStateChange(state, prevState) {
    const { actions } = this.props;
    if (state.count !== prevState.count
      && state.operation.source === 'shortcut') {
      if (this.timer) { // previous animation is not finished
        clearTimeout(this.timer); // cancel it
        this.timer = null;
        this.setState({ // hide it
          hidden: true,
          count: state.count,
        });
        setTimeout(() => {
          // refresh the count, show it in next loop
          actions.refreshOperation();
        }, 10);
      } else { // no previous animation
        // show it
        // update operation
        this.setState({
          hidden: false,
          count: state.count,
          operation: state.operation,
        });
        // hide it after 0.5s
        this.timer = setTimeout(() => {
          this.setState({
            hidden: true,
          });
          this.timer = null;
        }, 500);
      }
    }
  }

  render() {
    // only displays for shortcut so far
    if (this.state.operation.source !== 'shortcut') {
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
        aria-label={this.state.operation.action}
      >
        <div
          className={classNames(
            'video-react-bezel-icon',
            `video-react-bezel-icon-${this.state.operation.action}`
          )}
        />
      </div>
    );
  }
}

Bezel.propTypes = propTypes;
