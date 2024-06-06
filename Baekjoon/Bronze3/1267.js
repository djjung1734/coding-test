const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(f=>f.split(' ').map(Number));

let count = input[0][0];
let ys = 0;
let ms = 0;

for(let i=0;i<count;i++){
    let y = 10;
    let m = 15;

    y += (parseInt(input[1][i] / 30))*10;
    ys+=y;
    m += (parseInt(input[1][i] / 60))*15;
    ms+=m; 
}

if(ys > ms){
    console.log(`M ${ms}`);
}else if(ys === ms){
    console.log(`Y M ${ys}`);
}else{
    console.log(`Y ${ys}`);
}