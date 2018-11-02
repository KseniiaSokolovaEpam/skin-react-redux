import { playPauseStateList } from '../actions';
import { screenList } from '../actions';

const playPause = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_PLAY_PAUSE':
      console.log('BBB playPause prevState', state);
      console.log('BBB playPause action.mb', action.mb);
      console.log('BBB playPause action.activeScreen', action.activeScreen);
      const mb = action.mb;
      switch (action.activeScreen) {
        case screenList.START_SCREEN:
          mb.publish(window.OO.EVENTS.INITIAL_PLAY, Date.now(), false);
          break;
        case screenList.PAUSE_SCREEN:
          mb.publish(window.OO.EVENTS.PLAY);
          break;
        case screenList.PLAY_SCREEN:
          mb.publish(window.OO.EVENTS.PAUSE);
          break;
        case screenList.END_SCREEN:
          mb.publish(window.OO.EVENTS.REPLAY);
        default:
          break;
      }
      return !state;
    default:
      return state
  }
};

export default playPause