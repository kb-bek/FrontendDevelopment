const deposit = 12000;
const rate = 0.07;
const depositLength = 24;
const houseCost = 13500;

const res = deposit * (1 + rate / 12) ** 24;
if (res > houseCost) {
    console.log(`Мы накопили: ${res}.  Можем купить. Остаток ${res - houseCost}`);
} else {
    console.log(`Мы накопили: ${res}. Купить не сможем`)
}