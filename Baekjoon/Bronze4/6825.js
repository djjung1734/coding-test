const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let [weight, height] = fs.readFileSync(filePath).toString().split('\n').map(Number);

const bmi = weight/(height*height);

if(bmi > 25){
    console.log('Overweight');
}else if(bmi >= 18.5 && bmi <= 25.0){
    console.log('Normal weight');
}else{
    console.log('Underweight');
}