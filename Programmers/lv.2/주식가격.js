function solution(prices) {
  const arr = Array(prices.length).fill(0);

  for (let i = 0; i < prices.length; i++) {
    if (i === prices[prices.length]) break;
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] <= prices[j]) {
        arr[i]++;
      } else {
        arr[i]++;
        break;
      }
    }
  }
  return arr;
}

console.log(solution([1, 2, 3, 2, 3]));
