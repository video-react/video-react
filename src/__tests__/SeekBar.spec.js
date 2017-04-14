import React from 'react';
import { shallow, mount } from 'enzyme';
import SeekBar from '../components/control-bar/SeekBar';

describe('SeekBar', () => {
  it('should render with "div" tag', () => {
    const wrapper = mount(
      <SeekBar
        actions={{}}
        player={{
          duration: 200,
          currentTime: 50,
        }}
        mouseTime={{
          time: 100,
          position: 0,
        }}
      />
    );

    expect(wrapper.find('div.video-react-slider').length).toBe(1);
  });

  it('should render with "video-react-progress-holder" class', () => {
    const wrapper = shallow(
      <SeekBar
        actions={{}}
        player={{
          duration: 200,
          currentTime: 50,
        }}
        mouseTime={{
          time: 100,
          position: 0,
        }}
      />
    );
    expect(wrapper.hasClass('video-react-progress-holder')).toBe(true);
  });
});
