function solution(s) {
  let answer = [];
  let word = "";
  let first = 0;
  let same = 0;
  let diff = 0;

  for (let i = 0; i < s.length; i++) {
    word += s[i];
    if (s[first] === s[i]) {
      same++;
    } else {
      diff++;
    }
    if (same === diff) {
      answer.push(word);
      word = "";
      same = 0;
      diff = 0;
      first = i + 1;
    }
  }
  if (word !== "") {
    answer.push(word);
  }
  return answer.length;
}

console.log(solution("banana"));
console.log(solution("abracadabra"));
console.log(solution("aaabbaccccabba"));
