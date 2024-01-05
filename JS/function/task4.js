

const reverseNumber = num => {
    num = num + "";
    return num.split("").reverse().join("");
}

console.log(reverseNumber(2345));