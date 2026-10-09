// Entry point loaded by the docs site (see docs/lib/UI/VideoJsDemo.js).
// The docs site runs React 16, so this bundle carries its own React 19 and
// renders into a DOM node handed to it rather than sharing a React tree.
import { createRoot } from 'react-dom/client';
import Player from './Player';

window.VideoReactVideoJsDemo = {
  mount(element) {
    const root = createRoot(element);
    root.render(<Player />);
    return () => root.unmount();
  }
};
