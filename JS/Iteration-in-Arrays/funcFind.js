const arr = [3, 4, 4, 20, 24]

// let elGT5;
// for (const el of arr) {
//     if (el > 5) {
//         elGT5 = el;
//         break;
//     }
// }


let elGT5 = arr.find(el => el > 5);
let elGT5Index = arr.findIndex(el => el > 5);
console.log(elGT5);
console.log(elGT5Index);
