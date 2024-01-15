const users = ['Максат', 'Тилек', 'Акыл', 'Нурлан'];

users.sort();
console.log(users);

const opertions = [100, -300, -100, 50, 480];

// сортировка по возрастанию
opertions.sort((a, b) => {
    if (a > b) {
        return 1;
    }
    if (a < b) {
        return -1;
    }
});

console.log(opertions);

// сортировка по убыванию
opertions.sort((a, b) => {
    if (a < b) {
        return 1;
    }
    if (a > b) {
        return -1;
    }
});

console.log(opertions);