function arrayConcat(items1, items2) {
    return items1.concat(items2);
} // any 타입의 인자를 전달하는 함수
var arr1 = arrayConcat([10, 20, 30], ['a', 'b', 'c']);
arr1.push(true); //어떤 값이든 죄다 추가 가능
console.log(arr1);
//# sourceMappingURL=02-27.js.map