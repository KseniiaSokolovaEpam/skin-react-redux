import React, { Component } from 'react';
import { connect } from 'react-redux';
import { togglePlayPause } from '../store/actions';
import { screenList } from '../store/actions';

import StartScreen from '../components/startScreen';
import PlayScreen from '../components/playScreen';
import PauseScreen from '../components/pauseScreen';
import EndScreen from '../components/endScreen';

class ActiveScreen extends Component {
  render() {
    console.log('BBB this.props', this.props);
    let activeScreenElement = null;
    const { activeScreen } = this.props;
    switch ( activeScreen ) {
      case screenList.START_SCREEN:
        activeScreenElement = <StartScreen />;
        break;
      case screenList.PLAY_SCREEN:
        activeScreenElement = <PlayScreen />;
        break;
      case screenList.PAUSE_SCREEN:
        activeScreenElement = <PauseScreen />;
        break;
      case screenList.END_SCREEN:
        activeScreenElement = <EndScreen />;
        break;
      default:
        break;
    }
    return (
      <div>
        {activeScreenElement}
      </div>
    )

  }
}

const mapStateToProps = state => ({
  activeScreen: state.screen,
  promoImage: state.player.promoImage ? state.player.promoImage : ''
});

export default connect(
  mapStateToProps,
  null
)(ActiveScreen);