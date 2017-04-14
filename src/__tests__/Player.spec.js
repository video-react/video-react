import React from 'react';
import { shallow } from 'enzyme';
import Player from '../components/Player';

describe('Player', () => {
  it('should render with "div" tag', () => {
    const wrapper = shallow(
      <Player
        source="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
      />
    );

    expect(wrapper.type()).toBe('div');
  });

  it('should render with "video-react" class', () => {
    const wrapper = shallow(
      <Player
        source="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
      />
    );
    expect(wrapper.hasClass('video-react')).toBe(true);
  });
});
