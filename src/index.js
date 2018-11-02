import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './store/reducers';
import Player from './containers/Player';
import { addPlayerInfo, setActiveScreen, togglePlayPause } from './store/actions';
import { screenList } from './store/actions';


import './styles/index.css';
const store = createStore(rootReducer);

if (!window.OO) {
  window.OO = {};
}

const OO = window.OO;

OO.plugin('Html5Skin', function(OO) {
  const Html5Skin = function(mb, id) {
    this.mb = mb;
    store.dispatch(addPlayerInfo({mb, id}));
    this.init();
  };
  Html5Skin.prototype = {
    init: function() {
      const mb = this.mb;
      if (mb) {
        mb.subscribe(OO.EVENTS.PLAYER_CREATED, 'customerUi', this.onPlayerCreated.bind(this));
        mb.subscribe(OO.EVENTS.VC_VIDEO_ELEMENT_CREATED, 'customerUi', this.onVcVideoElementCreated.bind(this));
        mb.subscribe(OO.EVENTS.CONTENT_TREE_FETCHED, 'customerUi', this.onContentTreeFetched.bind(this));
        mb.subscribe(OO.EVENTS.SKIN_METADATA_FETCHED, 'customerUi', this.onSkinMetaDataFetched.bind(this));
        mb.subscribe(OO.EVENTS.INITIAL_PLAY, 'customerUi', this.onInitialPlay.bind(this));
        mb.subscribe(OO.EVENTS.VC_PLAY, 'customerUi', this.onVcPlay.bind(this));
        mb.subscribe(OO.EVENTS.VC_PLAYED, 'customerUi', this.onVcPlayed.bind(this));
        mb.subscribe(OO.EVENTS.VC_PLAYING, 'customerUi', this.onPlaying.bind(this));
        mb.subscribe(OO.EVENTS.VC_PAUSED, 'customerUi', this.onPaused.bind(this));
        mb.subscribe(OO.EVENTS.VC_PAUSE, 'customerUi', this.onPause.bind(this));
        mb.subscribe(OO.EVENTS.PLAYED, 'customerUi', this.onPlayed.bind(this));
      }
    },
    onPlayerCreated: function(event, elementId, params, settings) {
      console.log('BBB onPlayerCreated elementId', elementId, 'params', params, 'settings', settings);
      if (elementId) {
        this.createProvider(elementId);
      }
    },

    onVcVideoElementCreated: function(event, params) {},

    onSkinMetaDataFetched: function(event, skinMetaData) {},

    onContentTreeFetched: function(event, source) {
      if (source && source.promo_image) {
        store.dispatch(addPlayerInfo({promoImage: source.promo_image}));
      }
      console.log('BBB onContentTreeFetchec source', source);
    },

    onInitialPlay: function(event, source) {},
    onVcPlay: function(event, source) {},
    onPlaying: function(event, source) {},
    onVcPlayed: function(event, source) {},
    onPaused: function() {},
    onPause: function() {},
    onPlayed: function() {
      store.dispatch(setActiveScreen(screenList.END_SCREEN));
      store.dispatch(togglePlayPause(this.mb, screenList.PLAY_SCREEN));
    },

    createProvider: function(elementId) {
      const Root = (
        <div className="oo-player-container">
          <div className="innerWrapper oo-player oo-video-player"></div>
          <Provider store={store}>
            <Player />
          </Provider>
        </div>
      );
      render(Root, document.getElementById(elementId));
    }
  };
  return Html5Skin;
});