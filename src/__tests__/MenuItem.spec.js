import React from 'react';
import { shallow, mount } from 'enzyme';
import MenuItem from '../components/menu/MenuItem';

const items = [1, 2, 3, 4].map(i => ({
  label: `item${i}`,
  value: `item${i}`
}));

describe('ClosedCaptionButton', () => {
  it('should render with "MenuButton" tag', () => {
    const wrapper = shallow(
      <MenuItem
        item={items[0]}
        index={0}
      />
    );

    expect(wrapper.type()).toBe('li');
  });

  it('should call onSelectItem after click', () => {
    const handleSelectItem = jest.fn();
    const wrapper = mount(
      <MenuItem
        item={items[0]}
        index={0}
        onSelectItem={handleSelectItem}
      />
    );

    expect(wrapper.find('.video-react-menu-item').length).toEqual(1);
    wrapper.find('.video-react-menu-item').simulate('click');
    expect(handleSelectItem).toHaveBeenCalled();
  });
});
