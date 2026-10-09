import React from 'react';

// Video.js 10 needs React 18+, and this site runs React 16, so the demo is
// bundled separately (docs/videojs-demo) and mounted into this element once
// the page is in the browser.
const SCRIPT_SRC = '/assets/videojs/videojs-demo.js';

let loading;

function loadDemo() {
  if (!loading) {
    loading = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = SCRIPT_SRC;
      script.async = true;
      script.onload = () => resolve(window.VideoReactVideoJsDemo);
      script.onerror = () => {
        loading = null;
        reject(new Error(`Failed to load ${SCRIPT_SRC}`));
      };
      document.body.appendChild(script);
    });
  }
  return loading;
}

export default class VideoJsDemo extends React.Component {
  componentDidMount() {
    loadDemo()
      .then(demo => {
        if (!this.unmounted) {
          this.unmountDemo = demo.mount(this.element);
        }
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error(error);
      });
  }

  componentWillUnmount() {
    this.unmounted = true;
    if (this.unmountDemo) {
      this.unmountDemo();
    }
  }

  render() {
    return (
      <div
        className="videojs-demo"
        ref={element => {
          this.element = element;
        }}
      />
    );
  }
}
