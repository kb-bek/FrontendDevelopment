/**
 * Найти сумму чисел в массвие
 */

function sumOfNumbersInArray(array) {
    let sum = 0;
    for (let i in array) {
        sum += array[i];
    }

    return sum;
}
arr = [23, 32, 9, 4, 23]
console.log(sumOfNumbersInArray(arr))