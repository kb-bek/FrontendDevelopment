const transactionUSD = [23, 10, 30, 200, 45, 50];
// const transactionRUB = [];

// for (transaction of transactionUSD) {
//     transactionRUB.push(transaction * 60);
// }

// console.log(transactionRUB);

// Map function

const transactionRUB2 = transactionUSD.map((transaction, i) => {
    return transaction * 60;
});

console.log(transactionRUB2);