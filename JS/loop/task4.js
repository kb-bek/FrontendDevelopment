/**
 * Даны целые числа X и Y. Вычислить X^Y.
 */


const x = 3;
const y = 6;
let res = 1;

for (let i = 0; i < y; i++){
    res *= x;
}

console.log(res);
