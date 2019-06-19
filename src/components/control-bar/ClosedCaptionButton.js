import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';
import MenuButton from '../menu/MenuButton';

const propTypes = {
  player: PropTypes.object,
  actions: PropTypes.object,
  className: PropTypes.string,
  kinds: PropTypes.array
};

const defaultProps = {
  kinds: ['captions', 'subtitles'] // `kind`s of TextTrack to look for to associate it with this menu.
};

class ClosedCaptionButton extends Component {
  constructor(props, context) {
    super(props, context);

    this.getTextTrackItems = this.getTextTrackItems.bind(this);
    this.updateState = this.updateState.bind(this);
    this.handleSelectItem = this.handleSelectItem.bind(this);

    this.state = this.getTextTrackItems();
  }

  componentDidUpdate() {
    this.updateState();
  }

  getTextTrackItems() {
    const { kinds, player } = this.props;
    const { textTracks, activeTextTrack } = player;
    const textTrackItems = {
      items: [],
      selectedIndex: 0
    };
    const tracks = Array.from(textTracks || []);

    if (tracks.length === 0) {
      return textTrackItems;
    }

    textTrackItems.items.push({
      label: 'Off',
      value: null
    });

    tracks.forEach(textTrack => {
      // ignore invalid text track kind
      if (kinds.length && !kinds.includes(textTrack.kind)) {
        return;
      }

      textTrackItems.items.push({
        label: textTrack.label,
        value: textTrack.language
      });
    });

    textTrackItems.selectedIndex = textTrackItems.items.findIndex(
      item => activeTextTrack && activeTextTrack.language === item.value
    );

    if (textTrackItems.selectedIndex === -1) {
      textTrackItems.selectedIndex = 0;
    }

    return textTrackItems;
  }

  updateState() {
    const textTrackItems = this.getTextTrackItems();
    if (
      textTrackItems.selectedIndex !== this.state.selectedIndex ||
      !this.textTrackItemsAreEqual(textTrackItems.items, this.state.items)
    ) {
      this.setState(textTrackItems);
    }
  }

  textTrackItemsAreEqual(items1, items2) {
    if (items1.length !== items2.length) {
      return false;
    }

    for (let i = 0; i < items1.length; i++) {
      if (
        !items2[i] ||
        items1[i].label !== items2[i].label ||
        items1[i].value !== items2[i].value
      ) {
        return false;
      }
    }

    return true;
  }

  handleSelectItem(index) {
    const { player } = this.props;
    const { textTracks } = player;

    // For the 'subtitles-off' button, the first condition will never match so all will subtitles be turned off
    Array.from(textTracks).forEach((textTrack, i) => {
      if (index === i + 1) {
        // the 0 index is `Off`
        textTrack.mode = 'showing';
      } else {
        textTrack.mode = 'hidden';
      }
    });
  }

  render() {
    const { items, selectedIndex } = this.state;

    return (
      <MenuButton
        className={classNames(
          'video-react-closed-caption',
          this.props.className
        )}
        onSelectItem={this.handleSelectItem}
        items={items}
        selectedIndex={selectedIndex}
      >
        <span className="video-react-control-text">Closed Caption</span>
      </MenuButton>
    );
  }
}

ClosedCaptionButton.propTypes = propTypes;
ClosedCaptionButton.defaultProps = defaultProps;
ClosedCaptionButton.displayName = 'ClosedCaptionButton';
export default ClosedCaptionButton;
