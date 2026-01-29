/*
 * Напиши функцию calculateTotalPrice(items)
 * которая принимает массив цен (чисел) и возвращает их сумму
 */

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];


// function calculateTotalPrice(items) {
//   let total = 0;
//   for (const item of items) {
//     total += item;
//   }
//   return total;
// }


// console.log(calculateTotalPrice(cart));


/*
 * Напиши функцию logItems(items) для перебора и логирования массива
 */

// const logItems = function (items) {
//   for (const item of items) {
//     console.log(item)
//   }
// }

// console.log(logItems(['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n']));


/*
 * Напиши функцию findLogin(allLogins, login) для поиска логина
 * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
 * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
 */

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];

// const findLogin = function (allLogins, loginToFind) {
// for (const login of allLogins) {
//   if (login === loginToFind) {
//     return `Login is found ${loginToFind}`;
//   }
// }
// return `Login is not found - ${loginToFind}`;

// if (allLogins.includes(loginToFind)) {
//   return `Login is found ${loginToFind}`;
// }
// return `Login is not found - ${loginToFind}`;

//   return allLogins.includes(loginToFind) ? `Login is found ${loginToFind}` : `Login is not found - ${loginToFind}`;
// }

// console.log(findLogin(logins, 'k1widab3st'));