 /*
Ваша часовая ставка 80$ и вы готовы работать не
более 5 часов в день 5 дней в неделю (кроме выходных).
К вам приходит заказчик и предлагает заказ на 40
часов работы.
Сейчас понедельник.
Вы должны уехать через 11 дней.
Выведете в консоль:
- Boolean переменную успеете ли вы взяться за работу
- Сколько вы за неё попросите?
*/


// Данные 
const myHourlyRate = 80;
const projectHours = 40;
const availableHours = (11 - 2) * 5;

//Результат
console.log('Смогу ли я работать? ' + (availableHours > projectHours));
console.log('Стоимость работ: ' +  projectHours * myHourlyRate + '$');