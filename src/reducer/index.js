import {
  combineReducers
} from 'redux';
import photoData from './photoState';
import persons from './personState';

export default combineReducers({
  photoData,
  persons
})