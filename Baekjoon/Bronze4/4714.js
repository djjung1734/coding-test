const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

for(let i=0;i<input.length-1;i++){
    console.log(`Objects weighing ${input[i].toFixed(2)} on Earth will weigh ${(input[i]*0.167).toFixed(2)} on the moon.`);
}