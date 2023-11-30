"use strict";

// 화살표 함수에서의 this 차이점 알아보기

var obj = {
  result: 0
};
obj.add = function (x, y) {
  function inner() {
    this.result = x + y;
  }
  inner = inner.bind(this);
  inner();
};
obj.add(3, 4);
console.log(obj);