import React from 'react';
import { shallow } from 'enzyme';
import ForwardReplayControl from '../components/control-bar/ForwardReplayControl';

describe('ForwardReplayControl', () => {
  it('should render with "button" tag', () => {
    const Forwardontrol = ForwardReplayControl('forward');
    const wrapper = shallow(<Forwardontrol actions={{}} player={{}} />);

    expect(wrapper.type()).toBe('button');
  });

  it('should render with "video-react-control video-react-button" class', () => {
    const Forwardontrol = ForwardReplayControl('forward');
    const wrapper = shallow(<Forwardontrol actions={{}} player={{}} />);
    expect(wrapper.hasClass('video-react-control video-react-button')).toBe(
      true
    );
  });
});
