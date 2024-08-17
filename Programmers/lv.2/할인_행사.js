function solution(want, number, discount) {
  const total = number.reduce((a, b) => a + b);

  for (let i = 0; i <= discount.length - total; i++) {
    let shopping = discount.slice(i, i + total);
    let obj = {};
    for (let j = 0; j < want.length; j++) {
      obj[want[j]] = number[j];
    }
  }
}

//진행중
