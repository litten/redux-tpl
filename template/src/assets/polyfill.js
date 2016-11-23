//polyfill
require('ie-babel-class');
require('@tencent/placeholders');
import * as promise from 'es6-promise';
import * as fetch from 'fetch-ie8';
const objectAssign = require('object-assign');
window.Promise = window.Promise || promise.Promise;
window.fetch = window.fetch || fetch;
Object.assign = Object.assign || objectAssign;
