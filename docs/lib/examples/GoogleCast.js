import React from 'react';
import {
  Player,
  ControlBar,
  CurrentTimeDisplay,
  TimeDivider,
  DurationDisplay,
  ProgressControl,
  VolumeMenuButton
} from 'video-react';
import CastPlayToggle from '../../../src/components/control-bar/CastPlayToggle';

export default class GoogleCastComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCasting: false,
      castError: null
    };
  }

  componentDidMount() {
    // eslint-disable-next-line no-underscore-dangle
    window.__onGCastApiAvailable = isAvailable => {
      if (isAvailable) {
        this.initializeCastPlayer();
      }
    };
  }

  // Cast functions
  setupRemotePlayer() {
    const mediaInfo = new chrome.cast.media.MediaInfo(
      this.refs.player.getState().player.currentSrc,
      'video/mp4'
    );
    mediaInfo.streamType = chrome.cast.media.StreamType.BUFFERED;

    const request = new chrome.cast.media.LoadRequest(mediaInfo);

    cast.framework.CastContext.getInstance()
      .getCurrentSession()
      .loadMedia(request)
      .then(
        () => {
          this.setState({
            isCasting: true,
            castError: null
          });

          this.remotePlayer.currentTime = this.refs.player.getState().player.currentTime;
          this.remotePlayerController.seek();
        },
        errorCode => {
          this.setState({
            castError: errorCode
          });
        }
      );

    // this.setState({
    //   isCasting: true
    // });
  }

  toggleCastState() {
    if (cast && cast.framework && this.remotePlayer.isConnected) {
      // Pause local playback
      this.refs.player.pause();
      this.setupRemotePlayer();
    } else {
      this.setState({
        isCasting: false
      });
    }
  }

  initializeCastPlayer() {
    cast.framework.CastContext.getInstance().setOptions({
      receiverApplicationId: chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID
    });

    this.remotePlayer = new cast.framework.RemotePlayer();
    this.remotePlayerController = new cast.framework.RemotePlayerController(
      this.remotePlayer
    );
    this.remotePlayerController.addEventListener(
      cast.framework.RemotePlayerEventType.IS_CONNECTED_CHANGED,
      this.toggleCastState.bind(this)
    );
  }
  // End Cast functions

  render() {
    return (
      <>
        <Player ref="player" poster="/assets/poster.png">
          <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />

          <ControlBar disableDefaultControls>
            <CastPlayToggle
              order={1}
              isCasting={this.state.isCasting}
              remotePlayer={this.remotePlayer}
              remotePlayerController={this.remotePlayerController}
            />
            <CurrentTimeDisplay disabled={this.state.isCasting} order={4.1} />
            <TimeDivider disabled={this.state.isCasting} order={4.2} />
            <DurationDisplay disabled={this.state.isCasting} order={4.3} />
            <ProgressControl disabled={this.state.isCasting} order={6} />
            <google-cast-launcher
              is="google-cast-button"
              id="castbutton"
              order={9}
              style={{ width: '40px', height: '30px', padding: '4px' }}
            />
          </ControlBar>
        </Player>
        {this.state.castError && <p>{this.state.castError}</p>}
      </>
    );
  }
}
