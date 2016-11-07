import React from 'react';
import { shallow } from 'enzyme';
import { BigPlayButton } from '../';

describe('BigPlayButton', () => {
  it('should render with "button" tag', () => {
    const wrapper = shallow(
      <BigPlayButton
        player={{
          hasStarted: false,
        }}
      />
    );

    expect(wrapper.type()).toBe('button');
  });

  it('should render null if video has been started', () => {
    const wrapper = shallow(
      <BigPlayButton
        player={{
          hasStarted: true,
        }}
      />
    );
    expect(wrapper.type()).toBe(null);
  });


  it('should render with "video-react-big-play-button" class', () => {
    const wrapper = shallow(
      <BigPlayButton
        player={{
          hasStarted: false,
        }}
      />
    );
    expect(wrapper.hasClass('video-react-big-play-button')).toBe(true);
  });
});
