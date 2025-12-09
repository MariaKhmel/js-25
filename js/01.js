// const base = prompt('Please enter the number');
// if (base) {
//   const result = Number(Math.pow(base, base));
//   console.log(result);
// } else {
//   console.log('Cancelled');
// }
// const max = 80;
// const min = 30;


// const colors = ['teal', 'tomato', 'orange', 'deeppink'];
// const max = colors.length - 1;
// const min = 0;

// const index = Math.round(Math.random() * (max - min) + min);
// const color = colors[index];
// console.log(color);
// document.body.style.backgroundColor = color;

// const firstName = 'qwe';
// const lastName = 'ert';
// console.log(firstName + ' ' + lastName);
// const type = 'VIP';
// const welcomeMsg = 'Guest ' + firstName
//   + ' ' + lastName + ' ' + 'lives in' + ' '
//   + type + ' ' + 'room';
// console.log(welcomeMsg);
// const quantity = 5;
// console.log(`This is room number ${quantity}.`);

// const blacklitedWord = 'samsung';
// const res = prompt('Please write the word');
// const normalizedRes = res.toLowerCase();
// console.log(normalizedRes);
// const slicedRes = res.slice(1).toLowerCase();
// console.log(slicedRes);
// const blackListedWord = 'spam';
// const str = 'This is SPAM';
// console.log(str.toLowerCase().includes(blackListedWord));
// console.log(Number(null));
// console.log(Number(undefined));
// console.log(Number(false));
// console.log(Number(""));

// console.log('apple' && 'dog');
// console.log(false && null);
// console.log('apple' && false);

// const x1 = 10;
// const x2 = 30;
// const number = 50;

// console.log(`Number ${number} is included in the segment before x1`, number < x1)
// const res = number > x1 && number < x2;
// console.log(`Number ${number} is included in the segment`, res);
// const res = number < x1 || number > x2;
// console.log(`Is ${number} less than x1 and bigger than x2`, res);

// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// const canOpenChat = isOnline && isFriend;
// console.log(canOpenChat);

// const sub = 'pro';
// const canGetAccess = sub === 'pro' || sub === 'vip';

// console.log('Is there access to content?', sub === canGetAccess);



/*
 * Напиши скрипт выбора стоимости отеля по кол-ву звёзд.
 * 1 - 20$, 2 - 30$, 3 - 50$, 4 - 70$, 5 - 120$
 *
 * Если в переменной stars что-то кроме чисел 1-5, выведи строку
 * 'Такого кол-ва звезд нет'
 */

// const stars = 5;
// let price;

// if (stars === 1) {
//   price = 20;
// } else if (stars === 2) {
//   price = 30;
// } else if (stars === 3) {
//   price = 50;
// } else if (stars === 4) {
//   price = 70;
// } else if (stars === 5) {
//   price = 120;
// } else {
//   console.log("Such amount of starts is not an option.")
// }
// console.log(`${stars} hotel price is ${price}$ `);

// switch (stars) {
//   case 1:
//     price = 20;
//     break;
//   case 2:
//     price = 30;
//     break;
//   case 3:
//     price = 50;
//     break;
//   case 4:
//     price = 70;
//     break;
//   case 5:
//     price = 120;
//     break;
//   default:
//     console.log(`${stars} starts is not an option.`)
// }

// console.log(`${stars} star hotel price is ${price}$ `);



/*
 * Напиши скрипт выбора стоимости отеля по кол-ву звёзд.
 * 1,2 - 20$, 3,4 - 30$, 5 - 120$
 */

// const stars = 1;
// let price;

// switch (stars) {
//   case 1:
//   case 2:
//     price = 20;
//     break;
//   case 3:
//   case 4:
//     price = 30;
//     break;
//   case 5:
//     price = 120;
//     break;
//   default:
//     console.log(`${stars} starts is not an option.`)
// }

// console.log(`${stars} star hotel price is ${price}$ `);

// if (stars === 1 || stars === 2) {
//   price = 20;
// } else if (stars === 3 || stars === 4) {
//   price = 30;
// } else if (stars === 5) {
//   price = 120;
// } else {
//   console.log(`${stars} starts is not an option.`)
// }
// console.log(`${stars} star hotel price is ${price}$ `);

/*
 * Напиши скрипт выбора опции доставки товара.
 * Опция хранится в переменной option: 1 - самовывоз, 2 - курьер, 3 - почта
 *
 * В переменную message записать сообщение в зависимости от опции.
 * - 'Вы сможете забрать товар завтра с 12:00 в нашем офисе'
 * - 'Курьер доставит заказ завтра с 9:00 до 18:00'
 * - 'Посылка будет отправлена сегодня'
 * - 'Вам перезвонит менеджер'
 */

// const option = 1;
// let message;

// switch (option) {
//   case 1:
//     message = 'Вы сможете забрать товар завтра с 12:00 в нашем офисе';
//     break;
//   case 2:
//     message = 'Курьер доставит заказ завтра с 9:00 до 18:00';
//     break;
//   case 3:
//     message = 'Посылка будет отправлена сегодня';
//     break;
//   default:
//     message = 'Вам перезвонит менеджер';
// }

// console.log(message);

// for (let i = 0; i < 5; i += 1) {
//   console.log(i)
// }
// console.log('qwe')

/*
 * Напиши скрипт который подсчитывает общую сумму зарплат работников.
 * Кол-во работников хранится в перемнной employees.
 * Зарплата каждого работника это случайное число от 500 до 5000
 * Записать сумму в переменную totalSalary и вывести в консоль
 */

// const employees = 10;
// const min = 500;
// const max = 5000;
// let totalSalary = 0;

// for (let i = 1; i <= employees; i += 1) {
//   const salary = Number((Math.random() * (max - min) + min).toFixed());
//   console.log(`Employee salary is ${salary}`);
//   totalSalary += salary;
// }
// console.log(totalSalary);

/*
 * Напиши скрипт который подсчитывает сумму всех чётных чисел,
 * которые входят диапазон чисел в переменных от min до max.
 * Например, если min=0 и max=5, то диапазон 0-5, и в нём два чётных числа - 2 и 4, их сумма 6.
 */
// const min = 0;
// const max = 5;
// let total = 0;

// for (let i = 0; i <= max; i += 1) {
//   if (i % 2 === 0) {
//     console.log(` even ${i}`)
//     total += i;
//   }
// }
// console.log(total);


/*
 * Напиши скрипт обработки покупки в магазине.
 *
 * - Баланс пользователя хранится в переменной balance
 * - Сумма покупки хранится в переменной payment
 *
 * - Перед проверкой вывести сообщение:
 * «Общая стоимость заказа [число] кредитов. Проверяем кол-во доступных средств на счету»
 *
 * - Если сумма покупки не превышает баланс:
 *    - Вычесть из баланса сумму покупки
 *    - Вывести сообщение «На счету осталось [число] кредитов»
 * - Если сумма покупки превышает баланс:
 *    - Вывести сообщение «На счету недостаточно средств для проведения операции!»
 * - В конце вывести сообщение «Операция завершена»
 */


// let balance = 250;
// const payment = 300;

// console.log(`Общая стоимость заказа ${payment} кредитов. Проверяем кол-во доступных средств на счету`);
// if (payment <= balance) {
//   balance -= payment;
//   console.log(`На счету осталось ${balance} кредитов`);
// } else {
//   console.log('На счету недостаточно средств для проведения операции!');
// }
// console.log('Операция завершена');


/*
 * Напиши скрипт подсчёта суммы покупки со скидкой в зависимости
 * от потраченной суммы за всё время (партнёрская программа).
 *
 * - Общая сумма потраченного хранится в переменной totalSpent
 * - Сумма текущего платежа хранится в переменной payment
 * - Скидка хранится в переменной discount
 *
 * - Если потрачено от [100 до 1000) - бронзовый партнёр, скидка 2%
 * - Если потрачено от [1000 до 5000) - серебрянный партрёр, скидка 5%
 * - Если потрачено больше [5000 - золотой партрёр, скидка 10%
 * - Если потрачено меньше 100) - не партнёр, скидка 0%
 *
 * - В результате вывести сообщение
 * «Оформляем заказ на сумму [сумма] со скидкой [скидка]%»
 */


// const totalSpent = 3000;
// let payment = 1000;
// let discount = 0;

// if (totalSpent >= 100 && totalSpent < 1000) {
//   console.log('бронзовый партнёр, скидка 2%');
//   discount = 0.02;
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//   console.log('серебрянный партрёр, скидка 5%');
//   discount = 0.05;
// } else if (totalSpent >= 5000) {
//   console.log('золотой партрёр, скидка 10%');
//   discount = 0.10;
// } else {
//   console.log('не партнёр, скидка 0 %');
// }

// payment -= (payment * discount);

// console.log(`Оформляем заказ на сумму ${payment} со скидкой ${discount * 100} %`)


