function solution(x) {
    let answer = true;
    
    const num = x.toString().split('').map(Number).reduce((a,b)=>a+b);
    
    if(x%num !== 0) answer = false;
    
    return answer;
}

console.log(solution(10));
console.log(solution(12));
console.log(solution(11));
console.log(solution(13));