function solution(dirs) {
  const road = [];
  let dot = [0, 0];

  for (let i = 0; i < dirs.length; i++) {
    if (dirs[i] === "L" && dot[0] - 1 >= -5) {
      dot[0]--;
    } else if (dirs[i] === "R" && dot[0] + 1 <= 5) {
      dot[0]++;
    } else if (dirs[i] === "U" && dot[1] + 1 <= 5) {
      dot[1]++;
    } else if (dirs[i] === "D" && dot[1] - 1 >= -5) {
      dot[1]--;
    }
    console.log(dot);
  }
}

//진행중
