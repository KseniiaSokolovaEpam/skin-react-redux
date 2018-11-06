import { playPauseStateList } from '../actions';
import { screenList } from '../actions';

const playPause = (state = false, action, commonState) => {
  switch (action.type) {
    case 'TOGGLE_PLAY_PAUSE':
      if (commonState && commonState.player && commonState.player.mb) {
        const mb = commonState.player.mb;
        const activeScreen = commonState.screen;
        switch (activeScreen) {
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
      }
      return !state;
    default:
      return state
  }
};

export default playPause