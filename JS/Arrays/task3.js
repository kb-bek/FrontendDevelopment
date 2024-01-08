/*
Вводится массив. Найти сумму квадратов элементов массива и отнять от результата среднее арифметическое элементов,
возведенное в квадрат. Результат округлите до двух значений после запятой.
*/

const arr = [1, 4, 7, 8, 3];
let sum = 0;

function getAverage(array) {
    let sum = 0;
    for (let el of array){
        sum += el;
    }

    return sum / array.length;
}

for (let el of arr) {
    sum += el ** 2;
}

console.log(sum - getAverage(arr) ** 2)