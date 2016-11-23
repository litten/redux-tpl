'use strict';
import * as eduReport from '@tencent/edu-report';
import bkn from '@tencent/bkn';

// 数据上报设置
eduReport.config({
  module: 'xxx',
  opername: 'xxx',
  uin: 0,  // 必填
  ts: '',  // 必填，留空就行
});

/**
 * 数据上报
 * @param data 要上报的数据
 * @param im 是否立即上报
 */
export function report(data, im) {
  data.ver1 = getAid();
  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      if (data[key] instanceof Object) {
        try {
          data[key] = JSON.stringify(data[key]);
        } catch (e) {
        }
      }
    }
  }
  eduReport.tdw(data);
  if (im === true) {
    eduReport.toreport();
  }
}

// 如果以iframe内嵌在agency里，当页面出现弹窗时请记得调用以下
/**
 * 机构侧浮层-show
 */
export function mask_show() {
  window.top && window.top['_CRMMASK'] && window.top['_CRMMASK'].show();
}

/**
 * 机构侧浮层-hide
 */
export function mask_hide() {
  window.top && window.top['_CRMMASK'] && window.top['_CRMMASK'].hide();
}
