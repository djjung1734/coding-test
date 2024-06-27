function solution(n)
{
    let answer = 0;
    
    const arr = n.toString().split('').map(Number);
    for(let i=0;i<arr.length;i++){
        answer += arr[i];
    }
    return answer;
}

console.log(solution(123));
console.log(solution(987));