const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let [a,b,c,x,y] = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

const burger = [a,b,c];
const drink = [x,y];

burger.sort((a,b)=> a-b);
drink.sort((a,b)=> a-b);

console.log(burger[0]+drink[0]-50);