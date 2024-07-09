function solution(s, n) {
  const answer = [];
  const lower = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const upper = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  s.split("").map((s) => {
    if (s === " ") answer.push(" ");
    if (s.toLowerCase() === s) {
      for (let i = 0; i < lower.length; i++) {
        if (s === lower[i])
          i + n > 25
            ? answer.push(lower[i + n - 26])
            : answer.push(lower[i + n]);
      }
    } else {
      for (let i = 0; i < upper.length; i++) {
        if (s === upper[i])
          i + n > 25
            ? answer.push(upper[i + n - 26])
            : answer.push(upper[i + n]);
      }
    }
  });
  return answer.join("");
}

console.log(solution("AB", 1));
console.log(solution("z", 1));
console.log(solution("a B z", 4));
