function solution(phone_number) {
    let answer = '';
    
    for(let i=0;i<phone_number.length-4;i++){
        answer += '*';
    }
    const arr = phone_number.split('').splice(-4);
    answer += arr.join('');
    return answer;
}

console.log(solution('01033334444'));
console.log(solution('027778888'));