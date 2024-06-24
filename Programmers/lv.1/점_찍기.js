function solution(k, d) {
    let cnt = 0;
   
    for(let x=0;x<=d;x+=k){
        let y = parseInt(Math.sqrt(d**2-x**2));
        let total = parseInt(y/k+1);
        cnt+=total;
    }
    return cnt;
}

console.log(solution(2,4));
console.log(solution(1,5));