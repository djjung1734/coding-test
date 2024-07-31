function solution(s) {
  let answer = [0, 0];
  let remove0 = "";

  while (s !== "1") {
    remove0 = s.split(0).join("");
    answer[1] += s.length - remove0.length;
    s = remove0.length.toString(2);
    answer[0]++;
  }
  return answer;
}

console.log(solution("110010101001"));
console.log(solution("01110"));
console.log(solution("1111111"));
