import React, { Component } from 'react';
import { connect } from 'react-redux';

import ActiveScreen from './ActiveScreen';
import ControlBar from './ControlBar';

class Player extends Component {
  render() {
    const style = {
      'background': `url(${this.props.promoImage}) center center no-repeat`,
      'backgroundSize': 'contain',
      'width': '100%',
      'height': '100%',
      'display': 'flex',
      'alignItems': 'center',
      'justifyContent': 'center'
    };
    return (
      <div className="player" style={style}>
        <div className="screen">
          <ActiveScreen />
          <ControlBar />
        </div>
      </div>
    );

  }
}

const mapStateToProps = state => ({
  promoImage: state.player.promoImage ? state.player.promoImage : ''
});

export default connect(
  mapStateToProps,
  null
)(Player);
