function solution(str1, str2) {
  const arr1 = [];
  const arr2 = [];
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  for (let i = 0; i < str1.length; i++) {
    if (
      /^[a-zA-Z]*$/.test(str1.slice(i, i + 2)) &&
      str1.slice(i, i + 2).length === 2
    ) {
      arr1.push(str1.slice(i, i + 2));
    }
  }
  for (let i = 0; i < str2.length; i++) {
    if (
      /^[a-zA-Z]*$/.test(str2.slice(i, i + 2)) &&
      str2.slice(i, i + 2).length === 2
    ) {
      arr2.push(str2.slice(i, i + 2));
    }
  }
  console.log(arr1);
  console.log(arr2);
  console.log(arr1.filter((v) => arr2.includes(v)));
  console.log([
    ...arr1.filter((v) => arr2.includes(v)),
    ...arr1.filter((v) => !arr2.includes(v)),
  ]);
}

//진행중
//같은 값일 때 합집합이 제대로 나오지 않음
