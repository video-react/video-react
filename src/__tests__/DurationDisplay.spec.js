import React from 'react';
import { shallow, mount } from 'enzyme';
import DurationDisplay from '../components/time-controls/DurationDisplay';

describe('DurationDisplay', () => {
  it('should render with "div" tag', () => {
    const wrapper = mount(
      <DurationDisplay
        player={{
          duration: 100,
          currentTime: 20,
        }}
      />
    );
    expect(wrapper.find('div.video-react-duration-display').length).toBe(1);
  });

  it('should has more than 1 children', () => {
    const wrapper = shallow(
      <DurationDisplay
        player={{
          duration: 100,
          currentTime: 20,
        }}
      />
    );
    expect(wrapper.children().length).toBeGreaterThan(0);
  });
});
