function arrayConcat(items1: any[], items2: any[]): any[] {
  return items1.concat(items2);
} // any 타입의 인자를 전달하는 함수

let arr1 = arrayConcat([10, 20, 30], ['a', 'b', 'c']);
arr1.push(true); //어떤 값이든 죄다 추가 가능
console.log(arr1);
