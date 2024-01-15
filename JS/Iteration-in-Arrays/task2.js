/*
    Найти среднее значение последовательность 
    числе с помощью reduce
*/

const arr = [1, 5, 3, 6, 9, 13]

const avg = arr.reduce((acc, el, i) => {
    if(i != arr.length - 1) {
        return acc + el;
    } else {
        return (acc + el) / arr.length;
    }
}, 0);

console.log(avg);