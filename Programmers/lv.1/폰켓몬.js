function solution(nums) {
  let h_nums = [];

  h_nums = nums.filter((v, i) => {
    if (nums.indexOf(v) === i) return v;
  });
  return nums.length / 2 < h_nums.length
    ? parseInt(nums.length / 2)
    : h_nums.length;
}

console.log(solution([3, 1, 2, 3]));
console.log(solution([3, 3, 3, 2, 2, 4]));
console.log(solution([3, 3, 3, 2, 2, 2]));
