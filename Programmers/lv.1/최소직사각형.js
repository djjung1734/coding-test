function solution(sizes) {
    let w = 0;
    let h = 0;
    
    sizes.map(size=>size.sort((a,b)=>a-b).map((s,i)=>{
        if(i===0 && s>w)
            w = s;
        if(i===1 && s>h)
            h = s;       
    }));
    return w*h;
}

// function solution(sizes){
//     sizes = sizes.map(([w,h]) => w>h ? [w,h] : [h,w]);
    
//     let max = [0,0];
//     sizes.forEach(([w,h]) => {
//         if(max[0] < w) max[0] = w;
//         if(max[1] < h) max[1] = h;
//     });
//     return max[0]*max[1];
// }

console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]]));
console.log(solution([[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]));
console.log(solution([[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]));