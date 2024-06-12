const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let [l,a,b,c,d] = fs.readFileSync(filePath).toString().split('\n').map(Number);

const korean = Math.ceil(a/c);
const math = Math.ceil(b/d);

if(korean >= math){
    console.log(l - korean);
}else{
    console.log(l - math);
}