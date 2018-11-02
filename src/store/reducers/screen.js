import { screenList } from '../actions';

const activeScreen = (state = screenList.START_SCREEN, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_SCREEN':
      return action.screen;
    default:
      return state;
  }
};

export default activeScreen;