import React, { PropTypes, Component } from 'react';

const propTypes = {
  children: PropTypes.any,
};

export default class Video extends Component {

  render() {
    return (
      <video
        ref={(c) => { this.video = c; }}
        {...this.props}
      >
        {this.props.children}
      </video>
    );
  }
}

Video.propTypes = propTypes;
