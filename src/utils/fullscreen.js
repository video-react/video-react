class Fullscreen {
  request(elm) {
    if (elm.requestFullscreen) {
      elm.requestFullscreen({ navigationUI: 'hide' });
    } else if (elm.webkitRequestFullscreen) {
      elm.webkitRequestFullscreen({ navigationUI: 'hide' });
    } else if (elm.mozRequestFullScreen) {
      elm.mozRequestFullScreen({ navigationUI: 'hide' });
    } else if (elm.msRequestFullscreen) {
      elm.msRequestFullscreen({ navigationUI: 'hide' });
    }
  }

  exit() {
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
    return (
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement
    );
  }

  get enabled() {
    return (
      document.fullscreenEnabled ||
      document.webkitFullscreenEnabled ||
      document.mozFullScreenEnabled ||
      document.msFullscreenEnabled
    );
  }

  addEventListener(handler) {
    document.addEventListener('fullscreenchange', handler);
    document.addEventListener('webkitfullscreenchange', handler);
    document.addEventListener('mozfullscreenchange', handler);
    document.addEventListener('MSFullscreenChange', handler);
  }

  removeEventListener(handler) {
    document.removeEventListener('fullscreenchange', handler);
    document.removeEventListener('webkitfullscreenchange', handler);
    document.removeEventListener('mozfullscreenchange', handler);
    document.removeEventListener('MSFullscreenChange', handler);
  }
}

export default new Fullscreen();
