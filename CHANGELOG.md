<a name="0.2.1"></a>
## [0.2.1](https://github.com/video-react/video-react/compare/0.1.4...v0.2.1) (2016-11-13)



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
