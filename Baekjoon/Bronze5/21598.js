const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim();

if(+input === 1){
    console.log('SciComLove');
}else if(+input === 2){
    console.log('SciComLove');
    console.log('SciComLove');
}