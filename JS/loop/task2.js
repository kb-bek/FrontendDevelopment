/**
 * Найти четных чисел в массиве
 */

const numbers = [2, 11, 17, 5, 40, 8, 98, 32, 12]

for (let num of numbers) {
    if (num % 2 == 0){
        console.log(`Четное число - ${num}`)
    }
}