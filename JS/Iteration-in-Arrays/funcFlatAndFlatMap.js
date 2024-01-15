const arr = [[2, 3], [5, 6], [7, 5]];

const res = arr.flat();
const res2 = arr.flatMap(el => el.concat([1]));
console.log(res);
console.log(res2);