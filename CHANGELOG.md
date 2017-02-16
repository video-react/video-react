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
