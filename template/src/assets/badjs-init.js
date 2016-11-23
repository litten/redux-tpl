/* global BJ_REPORT */

// badjs初始化
BJ_REPORT.init({
  id: {{ badjs }},
  ignore: [],
  repeat: 1
});
// badjs上报时带上标识（离线包版本号/是否直出）
var _push = BJ_REPORT.push;
BJ_REPORT.push = function (msg) {
  var o = Object.prototype.toString.call(msg);
  var str = '';
  if (window.isPack) {
    str = ' [isPack] [packver: ' + window.packVersion + ']';
  } else if (window.isSvr) {
    str = ' [isSvr]';
  } else {
    str = ' [isAsync]';
  }

  if (o.indexOf('Object') > 0) {
    msg.msg = (msg.msg || '') + str;
  } else if (o.indexOf('Array') > 0) {
    msg.map(function (m) {
      BJ_REPORT.push(m);
    });
  } else {
    msg += str;
  }
  return _push(msg);
};
