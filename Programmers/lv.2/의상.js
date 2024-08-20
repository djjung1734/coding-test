function solution(clothes) {
  let answer = 1;
  let category = {};
  clothes.map((v) => {
    category.hasOwnProperty(v[1]) ? category[v[1]]++ : (category[v[1]] = 1);
  });

  for (let key in category) {
    answer *= category[key] + 1;
  }
  return answer - 1;
}

console.log(
  solution([
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
);
console.log(
  solution([
    ["crow_mask", "face"],
    ["blue_sunglasses", "face"],
    ["smoky_makeup", "face"],
  ])
);
