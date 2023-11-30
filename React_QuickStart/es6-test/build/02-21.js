"use strict";

var p = new Promise(function (Resolve, reject) {
  setTimeout(function () {
    var num = Math.random();
    if (num >= 0.8) {
      reject('생성된 숫자가 0.8 이상임 -' + num);
    }
    Resolve(num);
  }, 2000);
});
p.then(function (result) {
  console.log("\uCC98\uB9AC \uACB0\uACFC :", result);
})["catch"](function (error) {
  console.log('error : ', error);
});
console.log("## Promise \uAC1D\uCCB4 \uC0DD\uC131!");