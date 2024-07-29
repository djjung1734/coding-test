function solution(s) {
  s = s.split(" ");
  s = s.map((value) => {
    value = value.split("").map((v, i) => {
      if (i === 0 && isNaN(v)) {
        v = v.toUpperCase();
      } else if (isNaN(v)) {
        v = v.toLowerCase();
      }
      return v;
    });
    return value.join("");
  });
  return s.join(" ");
}

console.log(solution("3people unFollowed me"));
console.log(solution("for the last week"));
