function solution(babbling) {
  let babble = ["aya", "ye", "woo", "ma", "ayaaya", "yeye", "woowoo", "mama"];
  let compare = [];

  babbling = babbling.map((v) => {
    for (let i = 0; i < babble.length / 2; i++) {
      if (v.includes(babble[i]) && !v.includes(babble[i + 4])) {
        v = v.replaceAll(babble[i], " ");
      }
    }
    return v;
  });
  babbling = babbling.map((value) =>
    value
      .split("")
      .filter((v, i) => value.indexOf(v) === i)
      .join("")
  );

  return babbling.filter((v) => v === " ").length;
}

console.log(solution(["aya", "yee", "u", "maa"]));
console.log(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]));
