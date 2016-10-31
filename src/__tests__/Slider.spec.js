import React, { Component, PropTypes } from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Slider } from '../';

describe('Slider', () => {
  it('should render with "div" tag', () => {
    const wrapper = shallow(
      <Slider
        actions={{}}
        player={{}}
      />
      );
    expect(wrapper.type()).toBe('div');
  });

it('simulates click events', () => {
    const onClick = sinon.spy();
    const wrapper = shallow(
      <Slider
        onClick={onClick} 
      />
    );
    wrapper.find('div').simulate('click');
    expect(onClick.calledOnce).toBe(true);
  });

  it('should render children when passed in', () => {
    const wrapper = shallow(
      <Slider
        vertical
        player={{
        }}
      />);
    expect(wrapper.contains(<div className="video-react-slider-vertical"/>)).toBe(true);
  });

  it('should render children when passed in', () => {
    const wrapper = shallow(
      <Slider
        player={{
        }}
      />);
    expect(wrapper.contains(<div className="video-react-slider-horizontal"/>)).toBe(true);
  });

   it('should render children when passed in', () => {
    const wrapper = shallow(
      <Slider
        state={{
          active: false,
        }}
        player={{
        }}
      />);
    expect(wrapper.contains(<div className="video-react-sliding"/>)).toBe(true);
  });

});