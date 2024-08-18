function solution(want, number, discount) {
  let answer = 0;

  for (let i = 0; i <= discount.length - 10; i++) {
    let shopping = discount.slice(i, i + 10);
    let cnt = [];
    for (let j = 0; j < want.length; j++) {
      cnt[j] = 0;
      shopping.map((value, idx) => {
        if (value === want[j]) {
          cnt[j]++;
        }
      });
    }
    if (JSON.stringify(number) === JSON.stringify(cnt)) {
      answer++;
    }
  }
  return answer;
}

console.log(
  solution(
    ["banana", "apple", "rice", "pork", "pot"],
    [3, 2, 2, 2, 1],
    [
      "chicken",
      "apple",
      "apple",
      "banana",
      "rice",
      "apple",
      "pork",
      "banana",
      "pork",
      "rice",
      "pot",
      "banana",
      "apple",
      "banana",
    ]
  )
);
console.log(
  solution(
    ["apple"],
    [10],
    [
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
    ]
  )
);
