function power(pow) {
    return function (num) {
        return num ** pow;
    }
}

const power2 = pow => num => num ** pow;

const powerOfTwo = power(2);

console.log(powerOfTwo(3));
console.log(power(2)(4));
console.log(power2(2)(6));

