import React, { Component } from 'react';
import { connect } from 'react-redux';
import { togglePlayPause } from '../store/actions';
import { setActiveScreen } from '../store/actions';
import { playPauseStateList } from '../store/actions';
import { screenList } from '../store/actions';

import Icon from '../components/Icon';

class ControlBar extends Component {
  handleClick = (event) => {
    event.preventDefault();
    const { activeScreen, mb } = this.props ;
    let nextScreen = activeScreen;
    switch (activeScreen) {
      case screenList.START_SCREEN:
        nextScreen = screenList.PLAY_SCREEN;
        break;
      case screenList.PLAY_SCREEN:
        nextScreen = screenList.PAUSE_SCREEN;
        break;
      case screenList.PAUSE_SCREEN:
        nextScreen = screenList.PLAY_SCREEN;
        break;
      case screenList.END_SCREEN:
        nextScreen = screenList.PLAY_SCREEN;
        break;
      default:
        break;
    }
    this.props.togglePlayPause(mb, activeScreen);
    this.props.setActiveScreen(nextScreen);
  };
  render() {
    let text;
    if (this.props.isPlaying) {
      text = playPauseStateList.PAUSE;
    } else {
      text = playPauseStateList.PLAY;
    }
    return (
      <div className='control-bar'>
        <Icon text={text} onClick = {(event) => {this.handleClick(event)} } />
      </div>
    )

  }
}

const mapStateToProps = state => ({
  isPlaying: state.playPause,
  activeScreen: state.screen,
  mb: state.player.mb ? state.player.mb : {}
});

const mapDispatchToProps = dispatch => ({
  togglePlayPause: (mb, activeScreen) => dispatch(togglePlayPause(mb, activeScreen)),
  setActiveScreen: (screen) => dispatch(setActiveScreen(screen))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlBar);