const opertions = [100, -30, 9, -10, 40];

// const positiveOperations = [];
// for (opertion of opertions) {
//     if (opertion > 0) {
//         positiveOperations.push(opertion);
//     }
// }

// console.log(positiveOperations);

const positiveOperations = opertions.filter(opertion => {
    return opertion > 0;
})
console.log(positiveOperations);

const positiveRUBOperations = opertions.filter(opertion => {
    return opertion > 0;
}).map(opertion => opertion * 60);

console.log(positiveRUBOperations);