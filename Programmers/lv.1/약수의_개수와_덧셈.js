function solution(left, right) {
    let answer = 0;
    
    for(let i=left;i<=right;i++){
        let cnt = 0;
        for(let j=1;j<=i;j++){
            i%j === 0 ? cnt++ : cnt+=0;
        }
        cnt%2 === 0 ? answer += i : answer -= i;
    }
    
    return answer;
}

console.log(solution(13,17));
console.log(solution(24,27));