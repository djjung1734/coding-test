const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let [d1,d2,d3,d4] = fs.readFileSync(filePath).toString().split('\n').map(Number);

if(d1 === d2 && d1 === d3 && d1 === d4){
    console.log('Fish At Constant Depth');
}else if(d1 < d2 && d2 < d3 && d3 < d4){
    console.log('Fish Rising');
}else if(d1 > d2 && d2 > d3 && d3 > d4){
    console.log('Fish Diving');
}else{
    console.log('No Fish');
}