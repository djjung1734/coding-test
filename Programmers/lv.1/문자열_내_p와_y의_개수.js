function solution(s){
    let answer = true;
    const input = s.toLowerCase().split('');
    
    let p = 0;
    let y = 0;
    for(let i=0;i<input.length;i++){
        if(input[i] === 'p') p++;
        if(input[i] === 'y') y++;
    }
    if(p !== y){
        answer = false;
    }
    
    return answer;
}

//다른 사람의 풀이
// function solution(s){
//     return s.toLowerCase().split('p').length === s.toLowerCase().split('y').length;
// }

console.log(solution('pPoooyY'));
console.log(solution('Pyy'));