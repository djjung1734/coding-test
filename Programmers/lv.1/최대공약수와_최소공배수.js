function solution(n, m) {
    let answer = [];
    let num = n<m ? m : n;
    let tmp = 0;
    
    for(let i=2;i<=num;i++){
        if(n%i === 0 && m%i === 0){
            tmp = i;
        }
    }
    
    answer[0] = tmp === 0 ? 1 : tmp;
    answer[1] = n*m/answer[0];
    
    return answer;
}

console.log(solution(3,12));
console.log(solution(2,5));