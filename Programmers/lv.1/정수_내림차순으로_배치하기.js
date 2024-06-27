function solution(n) {
    let answer = 0;
    
    answer = parseInt(n.toString().split('').sort((a,b)=>b-a).join(''));
    
    return answer;
}

console.log(solution(118372));