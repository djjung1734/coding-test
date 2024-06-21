const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let [a,b,c] = fs.readFileSync(filePath).toString().split('\n').map(Number);

if(a===b && b===c && c===a){
    console.log('Equilateral');
}else if(a+b+c === 180 && ((a===b&& a!==c) || (b===c&& a!==c) || (a===c&& a!==b))){
    console.log('Isosceles');
}else if(a+b+c === 180 && (a!==b && a!==c && b!==c)){
    console.log('Scalene');
}else if(a+b+c !== 180){
    console.log('Error');
}