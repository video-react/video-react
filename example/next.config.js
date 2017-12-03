
module.exports = {
  exportPathMap() {
    const paths = [
      '/',
      '/components/',
      '/components/player',
      '/components/shortcut',
      '/components/big-play-button',
      '/components/poster-image',
      '/components/loading-spinner',
      '/components/control-bar',
      '/components/play-toggle',
      '/components/forward-control',
      '/components/replay-control',
      '/components/volume-menu-button',
      '/components/playback-rate-menu-button',
      '/customize/',
      '/customize/enable-disable-components',
      '/customize/customize-source',
      '/customize/customize-component',
    ];

    return paths.reduce(
      (result, path) =>
        Object.assign({}, result, {
          [path]: {
            page: path,
          },
        }),
      {},
    );
  },
};
