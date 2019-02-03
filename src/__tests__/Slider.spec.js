import React from 'react';
import { shallow } from 'enzyme';
import Slider from '../components/Slider';

describe('Slider', () => {
  it('should render with "div" tag', () => {
    const wrapper = shallow(<Slider actions={{}} player={{}} />);
    expect(wrapper.type()).toBe('div');
  });

  it('simulates click events', () => {
    const e = {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn()
    };
    const onClick = jest.fn();
    const wrapper = shallow(
      <Slider actions={{}} player={{}} onClick={onClick} />
    );

    wrapper.find('div').simulate('click', e);
    expect(e.preventDefault).toHaveBeenCalled();
  });

  it('should render children when passed in', () => {
    const wrapper = shallow(
      <Slider player={{}}>
        <div />
      </Slider>
    );
    expect(wrapper.children().length).toBeGreaterThan(0);
  });
});
