/*
    Написать функцию, которые возвращает true,
    если элемент есть, и false, если нет.
*/

const arr = [2, 4, 4, 10, 20];

// function some(element, array) {
//     const res = array.find(el => el === element);
//     return res == undefined ? false : true;
// }

// Function some 

console.log(arr.some(el => el === 4)); //true
console.log(arr.some(el => el === 1)); // false