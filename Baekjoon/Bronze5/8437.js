const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let [sum, diff] = fs.readFileSync(filePath).toString().trim().split('\n').map(BigInt);

const half = (sum - diff) / 2n; //정수 리터럴의 뒤에 n을 붙이거나(10n) 함수 BigInt()를 호출해 생성
console.log(`${half + diff}\n${half}`);