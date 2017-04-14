import React from 'react';
import { shallow, mount } from 'enzyme';
import CurrentTimeDisplay from '../components/time-controls/CurrentTimeDisplay';

describe('CurrentTimeDisplay', () => {
  it('should render with "div" tag', () => {
    const wrapper = mount(
      <CurrentTimeDisplay
        player={{
          duration: 100,
          currentTime: 20,
        }}
      />
    );
    expect(wrapper.find('div.video-react-current-time-display').length).toBe(1);
  });

  it('should has more than 1 children', () => {
    const wrapper = shallow(
      <CurrentTimeDisplay
        player={{
          duration: 100,
          currentTime: 20,
        }}
      />
    );
    expect(wrapper.children().length).toBeGreaterThan(0);
  });
});
