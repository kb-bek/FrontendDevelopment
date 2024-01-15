const opertions = [100, -30, 6, -40, 20];

// let balance = 0;
// for (const opertion of opertions) {
//     balance += opertion;
// }

// console.log(balance);

const balance = opertions.reduce((acc, opertion) => {
    return acc += opertion;
}, 0);

console.log(balance);

const minElement = opertions.reduce((acc, opertion) => {
    if (opertion > acc) {
        return acc;
    } else {
        return opertion;
    }
}, 0);

console.log(minElement)