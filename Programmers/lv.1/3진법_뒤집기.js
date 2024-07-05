function solution(n) {
    let answer = 0;
    let arr = [];
    
    while(n !== 0){
        arr.push(n%3);
        n = parseInt(n/3);
    }
    
    for(let i=1;i<=arr.length;i++){
       answer += Math.pow(3,i-1)*arr[arr.length-i];
    }
    return answer;
}

console.log(solution(45));
console.log(solution(125));