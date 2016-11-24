import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  actions: PropTypes.object,
  player: PropTypes.object,
  shortcuts: PropTypes.array,
};

export default class Shortcut extends Component {
  constructor(props, context) {
    super(props, context);

    this.defaultShortcuts = [
      {
        keyCode: 32, // spacebar
        handle: this.togglePlay,
      },
      {
        keyCode: 75, // k
        handle: this.togglePlay,
      },
      {
        keyCode: 70, // f
        handle: this.toggleFullscreen,
      },
      {
        keyCode: 37, // Left arrow
        handle: (player, actions) => {
          actions.replay(5); // Go back 5 seconds
          actions.setBezel('replay-5');
        }
      },
      {
        keyCode: 74, // j
        handle: (player, actions) => {
          actions.replay(10); // Go back 10 seconds
          actions.setBezel('replay-10');
        }
      },
      {
        keyCode: 39, // Right arrow
        handle: (player, actions) => {
          actions.forward(5); // Go forward 5 seconds
          actions.setBezel('forward-5');
        }
      },
      {
        keyCode: 76, // l
        handle: (player, actions) => {
          actions.forward(10); // Go forward 10 seconds
          actions.setBezel('forward-10');
        }
      },
      {
        keyCode: 36, // Home
        handle: (player, actions) => {
          actions.seek(0); // Go to beginning of video
        }
      },
      {
        keyCode: 35, // End
        handle: (player, actions) => {
          // Go to end of video
          actions.seek(player.duration);
        }
      },
      {
        keyCode: 38, // Up arrow
        handle: (player, actions) => {
          // Increase volume 5%
          let v = player.volume + 0.05;
          if (v > 1) {
            v = 1;
          }
          actions.changeVolume(v);
          actions.setBezel('volume-up');
        }
      },
      {
        keyCode: 40, // Down arrow
        handle: (player, actions) => {
          // Decrease volume 5%
          let v = player.volume - 0.05;
          if (v < 0) {
            v = 0;
          }
          actions.changeVolume(v);
          if (v > 0) {
            actions.setBezel('volume-down');
          } else {
            actions.setBezel('volume-off');
          }
        }
      },
      {
        keyCode: 190, // Shift + >
        shift: true,
        handle: (player, actions) => {
          // Increase speed
          let playbackRate = player.playbackRate;
          if (playbackRate >= 1.5) {
            playbackRate = 2;
          } else if (playbackRate >= 1.25) {
            playbackRate = 1.5;
          } else if (playbackRate >= 1.0) {
            playbackRate = 1.25;
          } else if (playbackRate >= 0.5) {
            playbackRate = 1.0;
          } else if (playbackRate >= 0.25) {
            playbackRate = 0.5;
          } else if (playbackRate >= 0) {
            playbackRate = 0.25;
          }
          actions.changeRate(playbackRate);
          actions.setBezel('fast-forward');
        }
      },
      {
        keyCode: 188, // Shift + <
        shift: true,
        handle: (player, actions) => {
          // Decrease speed
          let playbackRate = player.playbackRate;
          if (playbackRate <= 0.5) {
            playbackRate = 0.25;
          } else if (playbackRate <= 1.0) {
            playbackRate = 0.5;
          } else if (playbackRate <= 1.25) {
            playbackRate = 1.0;
          } else if (playbackRate <= 1.5) {
            playbackRate = 1.25;
          } else if (playbackRate <= 2) {
            playbackRate = 1.5;
          }
          actions.changeRate(playbackRate);
          actions.setBezel('fast-rewind');
        }
      }
    ];

    this.shortcuts = [...this.defaultShortcuts];

    this.handleKeypress = this.handleKeypress.bind(this);
    this.mergeShortcuts = this.mergeShortcuts.bind(this);
  }

  componentDidMount() {
    this.mergeShortcuts();
    document.addEventListener('keydown', this.handleKeypress);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.shortcuts != this.props.shortcuts) {
      this.mergeShortcuts();
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeypress);
  }

  // merge the shortcuts from props
  mergeShortcuts() {
    const gradeShortcut = (s) => {
      let score = 0;
      const ps = ['ctrl', 'shift', 'alt'];
      ps.forEach((key) => {
        if (s[key]) {
          score++;
        }
      });
      return score;
    };

    const shortcuts = (this.props.shortcuts || [])
      .filter((s) => s.keyCode && s.handle && (typeof s.handle === 'function'));

    this.shortcuts = [
      ...shortcuts,
      ...this.defaultShortcuts,
    ].sort((a, b) => gradeShortcut(b) - gradeShortcut(a));
  }

  togglePlay(player, actions) {
    if (player.paused) {
      actions.play();
      actions.setBezel('play');
    } else {
      actions.pause();
      actions.setBezel('pause');
    }
  }

  toggleFullscreen(player, actions) {

  }

  handleKeypress(e) {
    const { player, actions } = this.props;

    const keyCode = e.keyCode || e.which;
    const ctrl = e.ctrlKey || e.metaKey;
    const shift = e.shiftKey;
    const alt = e.altKey;

    const shortcut = this.shortcuts.find((s) => {
      if (s.keyCode != keyCode) {
        return false;
      }
      if ((s.ctrl !== undefined && s.ctrl !== ctrl)
        || (s.shift !== undefined && s.shift !== shift)
        || (s.alt !== undefined && s.alt !== alt)
        ) {
        return false;
      }
      return true;
    });

    if (shortcut) {
      shortcut.handle(player, actions);
      e.preventDefault();
    }

  }

  // this component dose not render anything
  // it's just for the key down event
  render() {
    return null;
  }
}


