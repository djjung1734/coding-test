function solution(s) {
  const answer = [];
  const arr = JSON.parse(s.replace(/{/g, "[").replace(/}/g, "]"));
  arr.sort((a, b) => a.length - b.length);
  arr.map((value) => {
    value.map((v) => {
      if (!answer.includes(v)) {
        answer.push(v);
      }
    });
  });
  return answer;
}

console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}"));
console.log(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}"));
console.log(solution("{{20,111},{111}}"));
console.log(solution("{{123}}"));
console.log(solution("{{4,2,3},{3},{2,3,4,1},{2,3}}"));
