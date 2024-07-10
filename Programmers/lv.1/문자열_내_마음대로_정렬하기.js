function solution(strings, n) {
  let answer = [];
  answer = strings.sort();
  answer.sort((a, b) => a[n].charCodeAt() - b[n].charCodeAt());
  return answer;
}

console.log(solution(["sun", "bed", "car"], 1));
console.log(solution(["abce", "abcd", "cdx"], 2));
