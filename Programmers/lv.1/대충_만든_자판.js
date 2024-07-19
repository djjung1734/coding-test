function solution(keymap, targets) {
  const answer = new Array(targets.length).fill(-1);

  for (let i = 0; i < targets.length; i++) {
    const target = targets[i];
    let count = 0;
    for (let j = 0; j < target.length; j++) {
      const str = target[j];
      const min = Math.min(
        ...keymap.map((x) => {
          const idx = x.indexOf(str);
          return idx === -1 ? Infinity : idx + 1;
        })
      );
      if (min === Infinity) {
        count = -1;
        break;
      }
      count += min;
    }
    answer[i] = count;
  }

  return answer;
}

console.log(solution(["ABACD", "BCEFD"], ["ABCD", "AABB"]));
console.log(solution(["AA"], ["B"]));
console.log(solution(["AGZ", "BSSS"], ["ASA", "BGZ"]));
