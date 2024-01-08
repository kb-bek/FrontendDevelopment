/* 
Вводится массив. Сколько в нем чисел совпадают с медианой (медиана - это среднее по величине значение в массиве;
если длина массива четная, то брать число, стоящее левее середины).
*/

const arr = [23, 43, 1, 32, 8, 76, 34];

let count = 0;

function getMedianNumber(array) {
    if (array.length % 2 != 0) {
        return array[Math.floor(array.length/2)];
    } else {
        return array[Math.floor(array.length/2)-1];
    }
}

for (let el of arr) {
    if (el === getMedianNumber(arr)) {
        count += 1;
    }
}

console.log(count);
