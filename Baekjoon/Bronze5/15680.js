const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim();

if(+input === 0){
    console.log('YONSEI');
}else if(+input === 1){
    console.log('Leading the Way to the Future');
}