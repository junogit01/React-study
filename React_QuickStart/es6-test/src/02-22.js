var p = new Promise((resolve, reject) => {
  resolve('first!');
});

p.then((msg) => {
  console.log(msg);
  throw new Error('## 에러');
  return 'second';
});
p.then((msg) => {
  console.log(msg);
  return 'Third';
});
p.then((msg) => {
  console.log(msg);
});
p.catch((error) => {
  console.log('에러 발생 ==> ', error);
});
