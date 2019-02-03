import React from 'react';
import { shallow, mount } from 'enzyme';
import TimeDivider from '../components/time-controls/TimeDivider';

describe('TimeDivider', () => {
  it('should render with "div" tag', () => {
    const wrapper = mount(<TimeDivider separator="-" />);
    expect(wrapper.find('div.video-react-time-divider').length).toBe(1);
  });

  it('should has more than 1 children', () => {
    const wrapper = shallow(<TimeDivider separator=":" />);
    expect(wrapper.children().length).toBeGreaterThan(0);
  });
});
