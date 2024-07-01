function solution(numbers) {
    let answer = -1;
    const arr = [0,1,2,3,4,5,6,7,8,9];
    
    numbers.sort((a,b)=>a-b);
    answer = arr.filter(n=> !numbers.includes(n)).reduce((a,b)=>a+b);
    
    return answer;
}

console.log(solution([1,2,3,4,6,7,8,0]));
console.log(solution([5,8,4,0,6,7,9]));