const player = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_PLAYER_INFO':
      const newPlayerInfo = {...state, ...action.newInfo};
      return newPlayerInfo;
    default:
      return state
  }
};

export default player;