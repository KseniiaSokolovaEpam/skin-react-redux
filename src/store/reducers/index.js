import player from './player';
import screen from './screen';
import playPause from './playPause';

export default (state = {}, action) => {
  return {
    player: player(state.player, action, state),
    screen: screen(state.screen, action, state),
    playPause: playPause(state.playPause, action, state)
  };
};