import Player from './components/Player';
import Video from './components/Video';
import BigPlayButton from './components/BigPlayButton';
import LoadingSpinner from './components/LoadingSpinner';
import PosterImage from './components/PosterImage';
import Slider from './components/Slider';
import Bezel from './components/Bezel';
import Shortcut from './components/Shortcut';

import ControlBar from './components/control-bar/ControlBar';
import PlayToggle from './components/control-bar/PlayToggle';
import ForwardControl from './components/control-bar/ForwardControl';
import ReplayControl from './components/control-bar/ReplayControl';
import FullscreenToggle from './components/control-bar/FullscreenToggle';
import ProgressControl from './components/control-bar/ProgressControl';
import SeekBar from './components/control-bar/SeekBar';
import PlayProgressBar from './components/control-bar/PlayProgressBar';
import LoadProgressBar from './components/control-bar/LoadProgressBar';
import MouseTimeDisplay from './components/control-bar/MouseTimeDisplay';
import VolumeMenuButton from './components/control-bar/VolumeMenuButton';
import PlaybackRateMenuButton from './components/control-bar/PlaybackRateMenuButton';
import PlaybackRate from './components/control-bar/PlaybackRate';
import ClosedCaptionButton from './components/control-bar/ClosedCaptionButton';

import RemainingTimeDisplay from './components/time-controls/RemainingTimeDisplay';
import CurrentTimeDisplay from './components/time-controls/CurrentTimeDisplay';
import DurationDisplay from './components/time-controls/DurationDisplay';
import TimeDivider from './components/time-controls/TimeDivider';

import MenuButton from './components/menu/MenuButton';

import * as playerActions from './actions/player';
import * as videoActions from './actions/video';
import { playerReducer, operationReducer } from './reducers';

export {
  Player,
  Video,
  BigPlayButton,
  LoadingSpinner,
  PosterImage,
  Bezel,
  Shortcut,
  ControlBar,
  PlayToggle,
  ForwardControl,
  ReplayControl,
  FullscreenToggle,
  ProgressControl,
  SeekBar,
  Slider,
  PlayProgressBar,
  LoadProgressBar,
  MouseTimeDisplay,
  RemainingTimeDisplay,
  CurrentTimeDisplay,
  DurationDisplay,
  TimeDivider,
  VolumeMenuButton,
  PlaybackRateMenuButton,
  ClosedCaptionButton,
  PlaybackRate,
  MenuButton,
  playerActions,
  videoActions,
  playerReducer,
  operationReducer
};
