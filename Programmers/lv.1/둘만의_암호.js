function solution(s, skip, index) {
  const alphabet = [
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
  let filter = [];
  let answer = [];

  filter = alphabet.filter((v) => !skip.includes(v));

  s.split("").map((value) =>
    filter.map((v, i) => {
      let idx = i + index;

      if (idx >= filter.length) idx %= filter.length;
      if (value === v) answer.push(filter[idx]);
    })
  );
  return answer.join("");
}

console.log(solution("aukks", "wbqd", 5));
