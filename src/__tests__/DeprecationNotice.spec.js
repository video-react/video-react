import React from 'react';
import { mount } from 'enzyme';
import Player from '../components/Player';

describe('Deprecation notice', () => {
  it('should log once per page, however many players mount', () => {
    const info = jest.spyOn(console, 'info').mockImplementation(() => {});

    try {
      const first = mount(<Player />);
      const second = mount(<Player />);

      expect(info).toHaveBeenCalledTimes(1);
      expect(info.mock.calls[0][0]).toContain('Video.js 10');
      expect(info.mock.calls[0][0]).toContain(
        'https://videojs.org/docs/framework/react/guides/migrate-from-video-react'
      );

      first.unmount();
      second.unmount();
    } finally {
      info.mockRestore();
    }
  });
});
