function calculate(a, b) {
    return function (action) {
        if (action === "+") {
            return a + b
        } 
        else if (action === "-") {
            return a - b;
        } 
        else if (action === "*") {
            return a * b;
        }
        else if (action === '/') {
            if (b === 0) {
                return "Делить на ноль невозможно!";
            } else {
                return a / b;
            }
        }
    }
}

console.log(calculate(34, 32)("+"));
console.log(calculate(32, 20)("-"));
console.log(calculate(3, 5)("*"));
console.log(calculate(43, 0)("/"));
console.log(calculate(20, 4)("/"));
