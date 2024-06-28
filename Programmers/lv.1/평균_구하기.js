function solution(arr) {
    let answer = 0;
    
    let sum =0;
    for(let i=0;i<arr.length;i++){
        sum += arr[i];
    }
    answer= sum/arr.length;
    return answer;
}

console.log(solution([1,2,3,4]));
console.log(solution([5,5]));