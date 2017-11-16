<a name="0.8.10"></a>
## [0.8.10](https://github.com/video-react/video-react/compare/v0.8.9...v0.8.10) (2017-11-16)



<a name="0.8.9"></a>
## [0.8.9](https://github.com/video-react/video-react/compare/v0.8.8...v0.8.9) (2017-10-19)

Fixed #52 Uncaught DOMException user performs seek operations when the video state waiting is true
Do not pause while seeking

<a name="0.8.8"></a>
## [0.8.8](https://github.com/video-react/video-react/compare/v0.8.7...v0.8.8) (2017-09-08)



Fixed #49 Video-React does not support IE
Fixed #48 ControlBar className from property doesnt appear

<a name="0.8.6"></a>
## [0.8.6](https://github.com/video-react/video-react/compare/v0.8.5...v0.8.6) (2017-07-22)

Fixed #41 BigPlayButton Arrests Keyboard

<a name="0.8.5"></a>
## [0.8.5](https://github.com/video-react/video-react/compare/v0.8.4...v0.8.5) (2017-06-08)

Add option to always show volume control #38 by Alex Koppel (@arsduo)

<a name="0.8.4"></a>
## [0.8.4](https://github.com/video-react/video-react/compare/v0.8.3...v0.8.4) (2017-06-06)

Add crossOrigin prop to Video PR#37 by Juan D.(@juandjara)


<a name="0.8.3"></a>
## [0.8.3](https://github.com/video-react/video-react/compare/v0.8.2...v0.8.3) (2017-05-01)



Add an example on how to add a download button component.

<a name="0.8.2"></a>
## [0.8.2](https://github.com/video-react/video-react/compare/v0.8.1...v0.8.2) (2017-04-24)

<a name="0.8.1"></a>
## [0.8.1](https://github.com/video-react/video-react/compare/v0.7.8...v0.8.1) (2017-04-24)
- Upgrade for React 15.5
- Add `className` property for components #22
- Add `style` node to `pakcage.json` #29

<a name="0.7.8"></a>
## [0.7.8](https://github.com/video-react/video-react/compare/v0.7.7...v0.7.8) (2017-04-17)
Fixed #29

<a name="0.7.7"></a>
## [0.7.7](https://github.com/video-react/video-react/compare/v0.7.6...v0.7.7) (2017-04-14)
Fixed Tests

<a name="0.7.6"></a>
## [0.7.6](https://github.com/video-react/video-react/compare/v0.7.5...v0.7.6) (2017-04-14)
Calling VideoReact from outside (HTML script tag)

<a name="0.7.5"></a>
## [0.7.5](https://github.com/video-react/video-react/compare/0.7.4...v0.7.5) (2017-04-11)
Fixed IE11 Issue by @yuheiy's help.

<a name="0.7.3"></a>
## [0.7.3](https://github.com/video-react/video-react/compare/0.7.2...v0.7.3) (2017-03-10)
NO CHANGES
Test travis-ci, use it to publish new release


<a name="0.7.2"></a>
# [0.7.2]
Fixed issue that the player can't handle blur event

<a name="0.7.0"></a>
# [0.7.0](https://github.com/video-react/video-react/compare/0.6.4...v0.7.0) (2017-02-20)

* Rewrited Menu component.
* Changed component name from `PlaybackRate` to `PlaybackRateMenuButton`.
* Fixed full screen bug on iPhone.
* Added travis-ci config

<a name="0.6.4"></a>
## [0.6.4](https://github.com/video-react/video-react/compare/0.6.3...v0.6.4) (2017-02-12)

Fixed issue #11 Make sure the children of Video can get video object

<a name="0.6.3"></a>
## [0.6.3](https://github.com/video-react/video-react/compare/0.6.2...v0.6.3) (2017-02-11)

Fixed issue #8 Spinner + Play Both Apear when no source
Merged  #9 Display LoadingSpinner.js only if the player has started
Fixed tests

<a name="0.6.2"></a>
## [0.6.2](https://github.com/video-react/video-react/compare/0.6.1...v0.6.2) (2017-01-19)

Fixed issue #7. muted={false} not working

<a name="0.6.1"></a>
## [0.6.1](https://github.com/video-react/video-react/compare/0.5.1...v0.6.1) (2017-01-19)

- Add more methods to control the video for the `Player` component
- Add the `subscribeToStateChange` method to subscribe the state changes
- Update the document
- Add an example on how to control the player from outside.

<a name="0.5.1"></a>
## [0.5.1](https://github.com/video-react/video-react/compare/0.4.4...v0.5.1) (2016-12-02)

- New features:
    - Support keyboard navigation
    - Click video to play or pause
- Fixed the conflict of scss with other's


<a name="0.4.4"></a>
## [0.4.4](https://github.com/video-react/video-react/compare/0.4.3...v0.4.4) (2016-11-29)

- Using base64 string for fonts in scss

<a name="0.4.3"></a>
## [0.4.3](https://github.com/video-react/video-react/compare/0.4.2...v0.4.3) (2016-11-24)

- Shortcut only works when the play has focus
- Using `isVideoChild` prop to check if an element belongs to the Video.
- Add documents for Customize
- Add an example on how to support HLS video source


<a name="0.4.2"></a>
## [0.4.2](https://github.com/video-react/video-react/compare/0.4.1...v0.4.2) (2016-11-24)

- Fixed source issue
- Move `redux` to peerDependencies
- Add `play()`, `pause()`, `load()`, `addTextTrack()`, `canPlayType()` methods to player.
- Add example for `Shortcut` component
- Add example for `Player`

<a name="0.4.1"></a>
## [0.4.1](https://github.com/video-react/video-react/compare/0.3.3...v0.4.1) (2016-11-23)

- Using redux to manage state
- Add `playsInline` property


<a name="0.3.3"></a>
## [0.3.3](https://github.com/video-react/video-react/compare/0.3.2...v0.3.3) (2016-11-21)

- Fixed VolumeMenu issue that it's vertical property did not work
- Added `autoPlay`, `startTime` properties for Player Component

<a name="0.3.2"></a>
## [0.3.2](https://github.com/video-react/video-react/compare/0.3.1...v0.3.2) (2016-11-19)

Fixed Issue #2: The mouse and control bar do not disappear when it's in fullscreen mode

<a name="0.3.1"></a>
## [0.3.1](https://github.com/video-react/video-react/compare/0.2.4...v0.3.1) (2016-11-18)

* Added keyboard shortcuts
* Display bezel icon for some keyboard operations
* Fixed some issues
* Remove supports for React v0.14

<a name="0.2.4"></a>
## [0.2.4](https://github.com/video-react/video-react/compare/0.2.3...v0.2.4) (2016-11-15)

* Filter children by `disabled` property.
* Inherit props from default component
* remove ninon from dependencies


<a name="0.2.1"></a>
## [0.2.1](https://github.com/video-react/video-react/compare/0.1.4...v0.2.1) (2016-11-13)

* New components:
    - CurrentTimeDisplay
    - DurationDisplay
    - RemainingTimeDisplay
    - TimeDivider
    - VolumeMenuButton
    - PlaybackRate
* New example on how to customize

<a name="0.0.2"></a>
# [0.0.2]()

* Copy the project settings from [reactstrap](https://github.com/reactstrap/reactstrap)
* Add new tests and new components

### Features

* **Player:** `Player` is the root component of the Video-React player. All the others components should be in this component.
* **Video:** `Video` is the React component for Html5 video, it renders the Html5 video element to embed a video. It also is the container for all video sources. If there are more then one source, it could be failed back.
* **LoadingSpinner:** There would be a loading spinner to display before the video is loaded.
* **BigPlayButton:** Initial play button. Shows before the video has played. The hiding of the big play button is done via CSS and player states.
* **PosterImage:** The PosterImage specifies an image to be shown while the video is downloading, or until the user hits the play button. If this is not included, the first frame of the video will be used instead.
