function solution(numbers, hand) {
  let right = 10;
  let left = 12;
  let result = "";

  numbers.map((v) => {
    if (v === 1 || v === 4 || v === 7) {
      result += "L";
      left = v;
    } else if (v === 3 || v === 6 || v === 9) {
      result += "R";
      right = v;
    } else if (v === 2 || v === 5 || v === 8 || v === 0) {
      if (v === 0) v = 11;
      let l_distance =
        parseInt(Math.abs(left - v) / 3) + (Math.abs(left - v) % 3);
      let r_distance =
        parseInt(Math.abs(right - v) / 3) + (Math.abs(right - v) % 3);
      if (l_distance < r_distance) {
        result += "L";
        left = v;
      } else if (l_distance > r_distance) {
        result += "R";
        right = v;
      } else {
        if (hand === "left") {
          result += "L";
          left = v;
        } else {
          result += "R";
          right = v;
        }
      }
    }
  });
  return result;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left"));
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right"));
