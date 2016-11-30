/**
 * @name global - actions
 * @description {{description}}
 * @author {{author}}
 * @date {{date}}
 */

'use strict';
import React from 'react';
import request from '@tencent/ke_fetch';
import { FETCH_GLOBAL_DEMO } from './consts';

export function fetchGlobalDemo() {
  return (dispatch) => {
    request('/cgi-bin/fetch_global_demo', {
      method: 'POST',
      body: {
        say: 'hello'
      }
    }).then(json => {
      dispatch({
        type: FETCH_GLOBAL_DEMO,
        data: json
      });
    }).catch(err => {
    });
  }
}
