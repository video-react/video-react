import React from 'react';
import { shallow } from 'enzyme';
import ProgressControl from '../components/control-bar/ProgressControl';

describe('ProgressControl', () => {
  it('should render with "div" tag', () => {
    const wrapper = shallow(<ProgressControl actions={{}} player={{}} />);

    expect(wrapper.type()).toBe('div');
  });

  it('should render with "video-react-progress-control" class', () => {
    const wrapper = shallow(<ProgressControl actions={{}} player={{}} />);
    expect(wrapper.hasClass('video-react-progress-control')).toBe(true);
  });
});
