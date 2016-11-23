'use strict';
import { combineReducers } from 'redux';
import * as globalReducers from '../../reducers';
import { FETCH_PAGE_DEMO } from './consts';

/**
 * 页面级别deomo
 * @param state
 * @param action
 * @return {*}
 */
function pageDemo(state = null, action) {
  switch (action.type) {
    case FETCH_PAGE_DEMO:
      return action.data;
    default:
      return state;
  }
}

export default combineReducers({
  ...globalReducers,
  pageDemo
});
