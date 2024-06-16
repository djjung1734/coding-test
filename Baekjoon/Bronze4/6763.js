const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let [limit, speed] = fs.readFileSync(filePath).toString().split('\n').map(Number);

const over = speed - limit;

if(over >= 31){
    console.log('You are speeding and your fine is $500.');
}else if(over >= 21 && over <= 30){
    console.log('You are speeding and your fine is $270.');
}else if(over >= 1 && over <= 20){
    console.log('You are speeding and your fine is $100.');
}else{
    console.log('Congratulations, you are within the speed limit!');
}