export const addPlayerInfo = info => ({
  type: 'ADD_PLAYER_INFO',
  newInfo: info
});

export const setActiveScreen = screen => ({
  type: 'SET_ACTIVE_SCREEN',
  screen
});

export const togglePlayPause = () => ({
  type: 'TOGGLE_PLAY_PAUSE'
});

export const screenList = {
  START_SCREEN: 'START_SCREEN',
  PLAY_SCREEN: 'PLAY_SCREEN',
  PAUSE_SCREEN: 'PAUSE_SCREEN',
  END_SCREEN: 'END_SCREEN'
};

export const playPauseStateList = {
  'PLAY': 'PLAY',
  'PAUSE': 'PAUSE'
};