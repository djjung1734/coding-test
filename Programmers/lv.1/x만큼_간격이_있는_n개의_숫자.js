function solution(x, n) {
    let answer = [];
    
    let num = x;
    for(let i=0;i<n;i++){
        answer[i] = num;
        num+=x;
    }
    
    return answer;
}

console.log(solution(2,5));
console.log(solution(4,3));
console.log(solution(-4,2));