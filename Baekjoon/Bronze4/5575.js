const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split('\n').map(f=>f.split(' ').map(Number));

for(let i=0;i<input.length;i++){

    let time1 = input[i][0]*60*60+input[i][1]*60+input[i][2];
    let time2 = input[i][3] > input[i][0] ? input[i][3]*60*60+input[i][4]*60+input[i][5] : (input[i][3]+24)*60*60+input[i][4]*60+input[i][5];


    let h = parseInt((time2-time1)/3600);
    let m = parseInt((time2-time1)/60)%60;
    let s = (time2-time1)%60;
    
    console.log(h,m,s);
}