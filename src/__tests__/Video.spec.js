import React from 'react';
import { shallow } from 'enzyme';
import Media from '../components/Media';

describe('Video', () => {
  it('should render with "video" tag', () => {
    const wrapper = shallow(<Media actions={{}} player={{}} type="video" />);

    expect(wrapper.type()).toBe('video');
  });

  it('should render with "video-react-video" class', () => {
    const wrapper = shallow(<Media actions={{}} player={{}} />);
    expect(wrapper.hasClass('video-react-video')).toBe(true);
  });
});
