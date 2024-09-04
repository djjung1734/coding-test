function solution(str1, str2) {
  const arr1 = [];
  const arr2 = [];
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  for (let i = 0; i < str1.length - 1; i++) {
    if (/^[a-z]{2}$/.test(str1[i] + str1[i + 1])) {
      arr1.push(str1[i] + str1[i + 1]);
    }
  }
  for (let i = 0; i < str2.length - 1; i++) {
    if (/^[a-z]{2}$/.test(str2[i] + str2[i + 1])) {
      arr2.push(str2[i] + str2[i + 1]);
    }
  }

  let intersection = 0;

  arr1.forEach((value, idx) => {
    for (let i = 0; arr2.length; i++) {
      if (value === arr2[i]) {
        arr2.splice(i, 1);
        intersection++;
        break;
      }
    }
  });

  console.log(arr1);
  console.log(arr2);
  // let union = arr1.length + arr2.length;

  // return union !== 0 ? parseInt((intersection / union) * 65536) : 65536;
}

console.log(solution("FRANCE", "french"));
console.log(solution("handshake", "shake hands"));
console.log(solution("aa1+aa2", "AAAA12"));
console.log(solution("E=M*C^2", "e=m*c^2"));
//시간 초과
