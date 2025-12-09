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

for (let i = 0; i < 5; i += 1) {
  console.log(i)
}
console.log('qwe')