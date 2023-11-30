"use strict";

var p = new Promise(function (resolve, reject) {
  resolve('first!');
});
p.then(function (msg) {
  console.log(msg);
  throw new Error('## 에러');
  return 'second';
});
p.then(function (msg) {
  console.log(msg);
  return 'Third';
});
p.then(function (msg) {
  console.log(msg);
});
p["catch"](function (error) {
  console.log('에러 발생 ==> ', error);
});