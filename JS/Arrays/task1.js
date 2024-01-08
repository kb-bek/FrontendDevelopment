/*
Вводится массив. Сколько в нем элементов больше среднего арифметического.
Динамическими массивами не пользоваться. 
*/


const array = [7, 36, 21, 48, 33, 46, 7, 17, 19, 41];
let count = 0;

function getAverage(arr) {
    let sum = 0;
    for (let el of arr){
        sum += el;
    }

    return sum / arr.length;
}

for (i in array) {
    if (array[i] > getAverage(array)) {
        count += 1;
    }
}

console.log(count)