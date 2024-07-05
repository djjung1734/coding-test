function solution(s) {
    let answer = [];
    let words=s.split(' ');
    for(let i=0;i<words.length;i++){
        let word = words[i].split('');
        answer.push(word.map((v,i) =>i%2===0 ? v.toUpperCase(): v.toLowerCase()).join(''));
    }
    return answer.join(' ');
}

console.log(solution('try hello world'));