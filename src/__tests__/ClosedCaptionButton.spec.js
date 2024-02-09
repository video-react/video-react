import React from 'react';
import { shallow, mount } from 'enzyme';
import ClosedCaptionButton from '../components/control-bar/ClosedCaptionButton';
import MenuButton from '../components/menu/MenuButton';

const playerState = {
  hasStarted: false,
  textTracks: [
    {
      kind: 'captions',
      label: 'English',
      language: 'en',
      mode: 'showing'
    },
    {
      kind: 'captions',
      label: 'Swedish',
      language: 'sv',
      mode: 'hidden'
    },
    {
      kind: 'captions',
      label: 'Russian',
      language: 'ru',
      mode: 'hidden'
    },
    {
      kind: 'descriptions',
      label: 'English',
      language: 'en',
      mode: 'hidden'
    }
  ],
  currentTextTrack: null
};

describe('ClosedCaptionButton', () => {
  it('should render with "MenuButton" tag', () => {
    const wrapper = shallow(<ClosedCaptionButton player={playerState} />);

    expect(wrapper.type()).toBe(MenuButton);
  });

  it('should show menu items after click', () => {
    const wrapper = mount(<ClosedCaptionButton player={playerState} />);

    expect(wrapper.find('.video-react-menu-item').length).toEqual(0);
    expect(wrapper.find('div.video-react-options-button').length).toEqual(1);
    wrapper.find('div.video-react-options-button').simulate('click');
    expect(wrapper.find('.video-react-menu-item').length).toEqual(4);
  });
});
