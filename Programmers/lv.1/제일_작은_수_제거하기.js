function solution(arr) {
    let answer = [];
    
    const arr2 = [...arr];
    arr2.sort((a,b)=>b-a).splice(-1,1);
    
    answer = arr2.length !== 0 ? arr.filter(x=> arr2.includes(x)) : [-1];
    
    return answer;
}

// function solution(arr) {
//     const min = Math.min(...arr);
//     return arr.length !== 1 ? arr.filter(i => i !== min) : [-1]
// }

console.log(solution([4,3,2,1]));
console.log(solution([10]));