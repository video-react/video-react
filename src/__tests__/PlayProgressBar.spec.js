import React from 'react';
import { shallow, mount } from 'enzyme';
import PlayProgressBar from '../components/control-bar/PlayProgressBar';

describe('PlayProgressBar', () => {
  it('should render with "div" tag', () => {
    const wrapper = mount(<PlayProgressBar currentTime={10} duration={1000} />);
    expect(wrapper.find('div.video-react-play-progress').length).toBe(1);
  });

  it('should render with "video-react-play-progress" class', () => {
    const wrapper = shallow(
      <PlayProgressBar currentTime={10} duration={1000} />
    );
    expect(wrapper.hasClass('video-react-play-progress')).toBe(true);
  });

  it('should render children when passed in', () => {
    const wrapper = shallow(
      <PlayProgressBar currentTime={10} duration={1000} />
    );
    expect(wrapper.children().length).toBeGreaterThan(0);
  });
});
