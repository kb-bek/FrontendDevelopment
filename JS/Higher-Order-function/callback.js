function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function power(a, b) {
    return a ** b;
}

function calculate(a, b, fn) {
    console.log(fn.name);
    const res = fn(a, b);
    return res;
}

let res = calculate(34, 21, add);
console.log(res);
res = calculate(32, 25, subtract);
console.log(res);
res = calculate(3, 4, power)
console.log(res);