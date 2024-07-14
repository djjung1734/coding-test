function solution(nums) {
  let num = [];
  let count = [];
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        num.push(nums[i] + nums[j] + nums[k]);
      }
    }
  }
  num.map((v) => {
    let cnt = 0;
    for (let i = 1; i <= v / 2; i++) {
      if (v % i === 0) cnt++;
    }
    count.push(cnt);
  });

  count = count.filter((v) => v === 1);
  return count.length;
}

console.log(solution([1, 2, 3, 4]));
console.log(solution([1, 2, 7, 6, 4]));
