const p = new Promise((Resolve, reject) => {
  setTimeout(() => {
    var num = Math.random();
    if (num >= 0.8) {
      reject('생성된 숫자가 0.8 이상임 -' + num);
    }
    Resolve(num);
  }, 2000);
});

p.then((result) => {
  console.log(`처리 결과 :`, result);
})
.catch((error) => {
  console.log('error : ', error);
});

console.log(`## Promise 객체 생성!`);
