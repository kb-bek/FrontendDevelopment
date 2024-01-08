/**
 * Дано натуральное число N. Найти сумму цифр числа N.
 */

let num = 543;
let sum = 0;

while (num >= 1) {
    sum += num % 10;
    num /= 10
}

console.log(Math.floor(sum))