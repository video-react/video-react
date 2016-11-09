import React from 'react';
import { shallow, mount } from 'enzyme';
import { TimeDivider } from '../';

describe('TimeDivider', () => {
  it('should render with "div" tag', () => {
    const wrapper = mount(
      <TimeDivider
        separator ={"-"}        
      />
    );
    expect(wrapper.find('div.video-react-time-divider').length).toBe(1);
  });
});
