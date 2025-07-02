const buffer = Buffer.from('저를 버퍼로 바궈라');

const array = [Buffer.from('띄엄 ' ), Buffer.from('띄엄 ' ), Buffer.from('띄어쓰기')];
const buffer2 = Buffer.concat(array);
console.log('concat():', buffer2.toString());

console.log(Buffer.alloc(5));