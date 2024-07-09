function solution(s) {
  let answer = [];

  s.split("").map((v, idx) => {
    let index = 0;
    for (let i = 0; i < idx; i++) {
      if (v === s[i]) {
        index = idx - i;
      }
    }
    answer.push(index === 0 ? -1 : index);
  });

  return answer;
}

console.log(solution("banana"));
console.log(solution("foobar"));
