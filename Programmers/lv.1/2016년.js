function solution(a, b) {
  const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  return day[new Date(`2016-${a}-${b}`).getDay()];
}

console.log(solution(5, 24));
