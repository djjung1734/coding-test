function solution(n) {
    let answer = 0;
    
    for(let i=2;i<n;i++){
        if((n-1)%i === 0){
            answer = i;
            break;
        }
    }
    return answer;
}

console.log(solution(10));
console.log(solution(12));