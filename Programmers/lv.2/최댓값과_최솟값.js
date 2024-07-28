function solution(s) {
  s = s
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  return s.at(0) + " " + s.at(-1);
}

console.log(solution("1 2 3 4"));
console.log(solution("-1 -2 -3 -4"));
console.log(solution("-1 -1"));
