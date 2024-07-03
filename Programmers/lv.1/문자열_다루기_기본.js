function solution(s) {
    let flag = true;
    if(s.length === 4 || s.length === 6){
        for(let i=0;i<s.length;i++){
            if(isNaN(s[i])) {
                flag = false;
            }
        }
    }else{
        flag = false;
    }
    return flag;
}

console.log(solution('a234'));
console.log(solution('1234'));