function solution(n) {
    let answer = 0;
    
    answer = Math.sqrt(n) === parseInt(Math.sqrt(n)) ? (Math.sqrt(n) + 1)**2 : -1;
    console.log(answer);
    
    return answer;
}

console.log(solution(121));
console.log(solution(3));