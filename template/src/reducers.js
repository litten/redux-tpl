'use strict';

import { combineReducers } from 'redux';
import { FETCH_GLOBAL_DEMO } from './consts';

/**
 * 全局deomo
 * @param state
 * @param action
 * @returns {Array}
 */
function globalDemo(state = null, action) {
  switch (action.type) {
    case FETCH_GLOBAL_DEMO:
      return action.data;
    default:
      return state;
  }
}

export default combineReducers({
  globalDemo
});