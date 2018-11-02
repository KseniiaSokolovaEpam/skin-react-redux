import { combineReducers } from 'redux';
import player from './player';
import screen from './screen';
import playPause from './playPause';

export default combineReducers({
  player,
  screen,
  playPause
})

