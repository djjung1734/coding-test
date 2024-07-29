function solution(s) {
  s = s.split(" ");
  s = s.map((value) =>
    value.split("").map((v, i) => {
      if (i === 0 && isNaN(v)) {
        console.log(v);
      }
    })
  );
}
