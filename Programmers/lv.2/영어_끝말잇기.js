function solution(n, words) {
  const arr = [];
  let answer = [];

  arr.push(words[0]);
  for (let i = 1; i < words.length; i++) {
    let first = words[i].charAt(0);
    let last = words[i - 1].charAt(words[i - 1].length - 1);
    if (arr.includes(words[i]) || first !== last) {
      answer = [(i % n) + 1, parseInt(i / n) + 1];
      break;
    } else {
      arr.push(words[i]);
    }
  }
  return answer.length === 0 ? [0, 0] : answer;
}

console.log(
  solution(3, [
    "tank",
    "kick",
    "know",
    "wheel",
    "land",
    "dream",
    "mother",
    "robot",
    "tank",
  ])
);
console.log(
  solution(5, [
    "hello",
    "observe",
    "effect",
    "take",
    "either",
    "recognize",
    "encourage",
    "ensure",
    "establish",
    "hang",
    "gather",
    "refer",
    "reference",
    "estimate",
    "executive",
  ])
);
console.log(
  solution(2, ["hello", "one", "even", "never", "now", "world", "draw"])
);
