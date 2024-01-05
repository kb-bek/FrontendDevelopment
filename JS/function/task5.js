

const moveZeroes = numbers => {
    let index = 0;
    for (i in numbers) {
        if (numbers[i] !== 0) {
            numbers[index++] = numbers[i];
        }
    }

    while (index < numbers.length) {
        numbers[index] = 0;
        index++;
    }

    return numbers;
}

console.log(moveZeroes([43, 65, 0, 12, 0, 32, 12, 0]))