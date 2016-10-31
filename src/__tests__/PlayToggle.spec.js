import React, { Component, PropTypes } from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { PlayToggle } from '../';
import Actions from '../actions';

describe('PlayToggle', () => {
  it('should render with "button" tag', () => {
    const wrapper = shallow(
      <PlayToggle
        actions={{}}
        player={{}}
      />
      );
    expect(wrapper.type()).toBe('button');
  });

it('simulates click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(
      <PlayToggle
        actions={{}}
        player={{}}
        onButtonClick={onButtonClick} 
      />
    );
    wrapper.find('button').simulate('click');
    expect(onButtonClick.calledOnce).toBe(true);
  });

  it('should render children when passed in', () => {
    const wrapper = shallow(
      <PlayToggle
        actions={{
        }}
        player={{
          paused: false,
        }}
      />);
    expect(wrapper.contains(<div className="video-react-playing"/>)).toBe(true);
  });

  it('should render children when passed in', () => {
    const wrapper = shallow(
      <PlayToggle
        actions={{
        }}
        player={{
          paused: true,
        }}
      />);
    expect(wrapper.contains(<div className="video-react-paused"/>)).toBe(true);
  });

});