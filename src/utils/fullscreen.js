class Fullscreen {
  request(elm) {
    if (elm.requestFullscreen) {
      elm.requestFullscreen();
    } else if (elm.webkitRequestFullscreen) {
      elm.webkitRequestFullscreen();
    } else if (elm.mozRequestFullScreen) {
      elm.mozRequestFullScreen();
    } else if (elm.msRequestFullscreen) {
      elm.msRequestFullscreen();
    }
  }

  exit() {
    const { document } = document.getElementById(
      'wot-not-chat-window'
    ).contentWindow;

    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }

  get isFullscreen() {
    const { document } = document.getElementById(
      'wot-not-chat-window'
    ).contentWindow;
    return (
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement
    );
  }

  get enabled() {
    const { document } = document.getElementById(
      'wot-not-chat-window'
    ).contentWindow;
    return (
      document.fullscreenEnabled ||
      document.webkitFullscreenEnabled ||
      document.mozFullScreenEnabled ||
      document.msFullscreenEnabled
    );
  }

  addEventListener(handler) {
    const { document } = document.getElementById(
      'wot-not-chat-window'
    ).contentWindow;
    document.addEventListener('fullscreenchange', handler);
    document.addEventListener('webkitfullscreenchange', handler);
    document.addEventListener('mozfullscreenchange', handler);
    document.addEventListener('MSFullscreenChange', handler);
  }

  removeEventListener(handler) {
    const { document } = document.getElementById(
      'wot-not-chat-window'
    ).contentWindow;
    document.removeEventListener('fullscreenchange', handler);
    document.removeEventListener('webkitfullscreenchange', handler);
    document.removeEventListener('mozfullscreenchange', handler);
    document.removeEventListener('MSFullscreenChange', handler);
  }
}

export default new Fullscreen();
