import React from 'react';
import { shallow } from 'enzyme';
import { SeekBar } from '../';

describe('SeekBar', () => {
  it('should render with "button" tag', () => {
    const wrapper = shallow(
      <SeekBar
        actions={{}}
        player={{}}
      />
    );

    expect(wrapper.type()).toBe('button');
  });

  it('should render with "video-react-seek-bar" class', () => {
    const wrapper = shallow(
      <SeekBar
        actions={{}}
        player={{}}
      />
    );
    expect(wrapper.hasClass('video-react-seek-bar')).toBe(true);
  });

 
});