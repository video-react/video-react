import React from 'react';
import { shallow, mount } from 'enzyme';
import { CurrentTimeDisplay } from '../';

describe('CurrentTimeDisplay', () => {
  it('should render with "div" tag', () => {
    const wrapper = mount(
      <CurrentTimeDisplay
        player = {{
            duration: 100,
            currentTime: 20,
        }}        
      />
    );
    expect(wrapper.find('div.video-react-current-time-display').length).toBe(1);
  });
});
