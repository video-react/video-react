import PropTypes from 'prop-types';
import { Component } from 'react';
import { hasClass } from '../utils/dom';

const propTypes = {
  manager: PropTypes.object,
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
          if (!player.hasStarted) {
            return;
          }
          actions.replay(5, {
            action: 'replay-5',
            source: 'shortcut'
          }); // Go back 5 seconds
        }
      },
      {
        keyCode: 74, // j
        handle: (player, actions) => {
          if (!player.hasStarted) {
            return;
          }
          actions.replay(10, {
            action: 'replay-10',
            source: 'shortcut'
          }); // Go back 10 seconds
        }
      },
      {
        keyCode: 39, // Right arrow
        handle: (player, actions) => {
          if (!player.hasStarted) {
            return;
          }
          actions.forward(5, {
            action: 'forward-5',
            source: 'shortcut'
          }); // Go forward 5 seconds
        }
      },
      {
        keyCode: 76, // l
        handle: (player, actions) => {
          if (!player.hasStarted) {
            return;
          }
          actions.forward(10, {
            action: 'forward-10',
            source: 'shortcut'
          }); // Go forward 10 seconds
        }
      },
      {
        keyCode: 36, // Home
        handle: (player, actions) => {
          if (!player.hasStarted) {
            return;
          }
          actions.seek(0); // Go to beginning of video
        }
      },
      {
        keyCode: 35, // End
        handle: (player, actions) => {
          if (!player.hasStarted) {
            return;
          }
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
          actions.changeVolume(v, {
            action: 'volume-up',
            source: 'shortcut'
          });
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
          const action = (v > 0) ? 'volume-down' : 'volume-off';
          actions.changeVolume(v, {
            action,
            source: 'shortcut'
          });
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
          actions.changeRate(playbackRate, {
            action: 'fast-forward',
            source: 'shortcut'
          });
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
          actions.changeRate(playbackRate, {
            action: 'fast-rewind',
            source: 'shortcut'
          });
        }
      }
    ];

    this.shortcuts = [...this.defaultShortcuts];

    this.mergeShortcuts = this.mergeShortcuts.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDoubleClick = this.handleDoubleClick.bind(this);
  }

  componentDidMount() {
    this.mergeShortcuts();
    document.addEventListener('keydown', this.handleKeyPress);
    document.addEventListener('click', this.handleClick);
    document.addEventListener('dblclick', this.handleDoubleClick);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.shortcuts !== this.props.shortcuts) {
      this.mergeShortcuts();
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
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
      actions.play({
        action: 'play',
        source: 'shortcut'
      });
    } else {
      actions.pause({
        action: 'pause',
        source: 'shortcut'
      });
    }
  }

  toggleFullscreen(player, actions) {
    actions.toggleFullscreen(player);
  }

  handleKeyPress(e) {
    const { player, actions } = this.props;
    if (!player.isActive) {
      return;
    }
    if (document.activeElement && (
        hasClass(document.activeElement, 'video-react-control')
        || hasClass(document.activeElement, 'video-react-menu-button-active')
        // || hasClass(document.activeElement, 'video-react-slider')
        || hasClass(document.activeElement, 'video-react-big-play-button')
      )) {
      return;
    }

    const keyCode = e.keyCode || e.which;
    const ctrl = e.ctrlKey || e.metaKey;
    const shift = e.shiftKey;
    const alt = e.altKey;

    const shortcut = this.shortcuts.filter((s) => {
      if (!s.keyCode || s.keyCode - keyCode !== 0) {
        return false;
      }
      if ((s.ctrl !== undefined && s.ctrl !== ctrl)
        || (s.shift !== undefined && s.shift !== shift)
        || (s.alt !== undefined && s.alt !== alt)
        ) {
        return false;
      }
      return true;
    })[0];

    if (shortcut) {
      shortcut.handle(player, actions);
      e.preventDefault();
    }
  }

  // only if player is active and player is ready
  canBeClicked(player, e) {
    if (!player.isActive
      || e.target.nodeName !== 'VIDEO'
      || player.readyState !== 4) {
      return false;
    }
    return true;
  }

  handleClick(e) {
    const { player, actions } = this.props;
    if (!this.canBeClicked(player, e)) {
      return;
    }
    this.togglePlay(player, actions);
    // e.preventDefault();
  }

  handleDoubleClick(e) {
    const { player, actions } = this.props;
    if (!this.canBeClicked(player, e)) {
      return;
    }
    this.toggleFullscreen(player, actions);
    // e.preventDefault();
  }

  // this component dose not render anything
  // it's just for the key down event
  render() {
    return null;
  }
}

Shortcut.propTypes = propTypes;

