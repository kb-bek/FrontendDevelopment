
const arr = new Array(5);
arr.fill(1, 0, 3);
arr.fill(2, 3, 5);

console.log(arr); // [ 1, 1, 1, 2, 2 ]

const arr2 = Array.from({length: 5}, (cur, i) => i + 1);
console.log(arr2); // [ 1, 2, 3, 4, 5 ]
