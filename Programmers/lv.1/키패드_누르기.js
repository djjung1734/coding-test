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
      let l_distance =
        v === 0 ? Math.abs(10 - left) % 3 : Math.abs(v - left) % 3;
      let r_distance =
        v === 0 ? Math.abs(10 - right) % 3 : Math.abs(v - right) % 3;
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
  console.log(right, left);
  console.log(result);
}
