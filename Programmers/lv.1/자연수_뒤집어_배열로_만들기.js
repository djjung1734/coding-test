function solution(n) {
    let answer = [];
    
    answer = n.toString().split('').map(Number).reverse();
    
    return answer;
}

console.log(solution(12345));