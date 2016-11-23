'use strict';
import React from 'react';
import request from '@tencent/ke_fetch';
import { FETCH_PAGE_DEMO } from './consts';

export function fetchPageDemo() {
  return (dispatch) => {
    request('/cgi-bin/fetch_page_demo', {
      method: 'POST',
      body: {
        say: 'goodbye'
      }
    }).then(json => {
      dispatch({
        type: FETCH_PAGE_DEMO,
        data: json
      });
    }).catch(err => {
    });
  }
}
