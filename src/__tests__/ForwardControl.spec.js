import React from 'react';
import { shallow } from 'enzyme';
import ForwardControl from '../components/control-bar/ForwardControl';

describe('ForwardControl', () => {
  it('should render with "button" tag', () => {
    const wrapper = shallow(<ForwardControl actions={{}} player={{}} />);

    expect(wrapper.type()).toBe('button');
  });

  it('should render with "video-react-button" class', () => {
    const wrapper = shallow(<ForwardControl actions={{}} player={{}} />);
    expect(wrapper.hasClass('video-react-button')).toBe(true);
  });

  it('should render with "video-react-forward-control" class', () => {
    const wrapper = shallow(<ForwardControl actions={{}} player={{}} />);
    expect(wrapper.hasClass('video-react-forward-control')).toBe(true);
  });

  it('should render with "video-react-icon-forward-5" class for forward 5 seconds', () => {
    const wrapper = shallow(
      <ForwardControl seconds={5} actions={{}} player={{}} />
    );
    expect(wrapper.hasClass('video-react-icon-forward-5')).toBe(true);
  });

  it('should render with "video-react-icon-forward-10" class for forward 10 seconds', () => {
    const wrapper = shallow(
      <ForwardControl seconds={10} actions={{}} player={{}} />
    );
    expect(wrapper.hasClass('video-react-icon-forward-10')).toBe(true);
  });

  it('should render with "video-react-icon-forward-30" class for forward 30 seconds', () => {
    const wrapper = shallow(
      <ForwardControl seconds={30} actions={{}} player={{}} />
    );
    expect(wrapper.hasClass('video-react-icon-forward-30')).toBe(true);
  });
});
