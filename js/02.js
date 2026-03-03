// const friends = ['a', 'b', 'c', 'd'];
// const lastIndex = friends.length - 1;
// console.log(lastIndex);
// console.log(typeof friends);
// friends[3] = 'pp';
// console.table(friends);
// console.log(friends.length);

// const lastIndex = friends.length - 1;
// for (let i = 0; i <= lastIndex; i += 1) {
//   console.log(friends[i]);
// }

// for (let i = 0; i <= lastIndex; i += 1) {
//   friends[i] = ` ${friends[i]} - ${i + 1}`;

// }

// console.log(friends);

/*
 * Посчитать общую сумму покупок в корзине
 */

const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];

// let total = 0;

// for (const value of cart) {
//   total += value;
// }
// console.log(total);

// let total2 = 0;
// for (let i = 0; i <= cart.length - 1; i += 1) {
//   total2 += cart[i];
// }

// console.log(total2);

// for (let i = 0; i < cart.length; i += 1) {
//   cart[i] = Math.round(cart[i] * 1.1);
// }

// console.log(cart);

/*
 * Напиши скрипт который подсчитывает сумму всех чётных чисел в массиве.
 */

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];

// let total = 0;

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] % 2 === 0) {
//     console.log('even num', numbers[i])
//     total += numbers[i];
//   }
// }

// for (const number of numbers) {
//   if (number % 2 === 0) {
//     console.log('even num', number)
//     total += number;
//   }
// }
// console.log(total);


/*
 * Напиши скрипт поиска логина
 * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
 * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
 *
 * - Сначала через for
 * - Потом через for...of
 * - Логика break
 * - Метод includes() с тернарным оператором
 */

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'aj4xth3m4n';

// let message = `Пользователь ${loginToFind} найден.`;

let message = '';

// for (let i = 0; i < logins.length; i += 1) {
//   if (logins[i] === loginToFind) {
//     message = `Пользователь ${loginToFind} найден.`;
//     break;
//   }

//   message = `Пользователь ${loginToFind} не найден.`;
// }


// for (let i = 0; i < logins.length; i += 1) {
//   if (logins[i] !== loginToFind) {
//     message = `Пользователь ${loginToFind} найден.`;
// break;
//   }
// }


// for (const login of logins) {
//   if (login !== loginToFind) {
//     message = `Пользователь ${loginToFind} найден.`;
// break;
//   }
// }

// const message = logins.includes(loginToFind) ? `Пользователь ${loginToFind} найден.` : `Пользователь ${loginToFind} найден.`;
// console.log(message);


/*
 * Напиши скрипт поиска самого маленького числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//   if (number < smallestNumber) {
//     smallestNumber = number;
//   }
// }

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < smallestNumber) {
//     smallestNumber = numbers[i];
//   }
// }

// const smallestNumber = Math.min(...numbers);
// const sortedNumbers = [...numbers].sort((a, b) => a - b);

// console.log(sortedNumbers[0]);
// console.log(numbers)

/*
 * Напиши скрипт, который объединяет все элементы массива в одно строковое значение.
 * Элементов может быть произвольное кол-во.
 * Пусть элементы массива  в строке будут разделены запятой.
 * - Сначала через for
 * - Потом через join()
 */

// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// let string = '';

// for (const friend of friends) {
//   string += friend + ',';
// }

// string = string.slice(0, string.length - 1);

// string = friends.join(',');

// console.log(string);

/*
 * Напиши скрипт который заменяет регистр каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
 */

// const string = 'qWeRTzxCv';
// const letters = string.split('');
// console.log(letters)
// let invertedString = '';

// for (const letter of letters) {
//   if (letter === letter.toLowerCase()) {
//     invertedString += letter.toUpperCase();
//   } else {
//     invertedString += letter.toLowerCase();
//   }
// }

// for (const letter of letters) {
//   const isEqual = letter === letter.toLowerCase();
//   invertedString += isEqual ? letter.toUpperCase() : letter.toLowerCase;
// }

// console.log(invertedString);


/*
 * Делаем slug в URL из названия статьи (например на dev.to)
 * Заголовок статьи состоит только из букв и пробелов
 *
 * - Нормализируем строку
 * - Разбиваем по словам
 * - Сшиваем в строку с разделителями
 */

// const title = 'Top 10 benefits of React framework';
// const normalizedTitle = title.toLowerCase();
// const words = normalizedTitle.split(' ');
// const slug = words.join('-');
// console.log(slug);
// const slug1 = title.toLowerCase().split(' ').join('-');
// console.log(slug1);

/*
 * Напиши скрипт который считает сумму элементов двух массивов.
 */

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;
// for (const number of array1) {
//   total += number;
// }
// for (const number of array2) {
//   total += number;
// }

// const numbers = array1.concat(array2);
// const numbers = [...array1, ...array2];
// console.log(total);

/*
 * Работем с коллекцией карточек в trello
 * - Метод splice()
 * - Удалить
 * - Добавить
 * - Обновить
 */

const cards = [
  'Карточка-1',
  'Карточка-2',
  'Карточка-3',
  'Карточка-4',
  'Карточка-5',
];

// console.log(cards);

/*
 * Удаление (по индексу), метод indexOf()
 */

// const cardToRemove = 'Карточка-3';
// const cardIdx = cards.indexOf(cardToRemove);
// const spliceres = cards.splice(cardIdx, 1);
// console.log(spliceres)
// console.log(cards);

/*
 * Добавление (по индексу)
 */
// const cardToInsert = 'Карточка-6';
// const index = 3;
// cards.splice(index, 0, cardToInsert);
// cards.push(cardToInsert);
// console.log(cards);

/*
 * Обновление (по индексу)
 */
const cardToUpdate = 'Карточка-4';
const index = cards.indexOf(cardToUpdate);

cards.splice(index, 1, 'updated card 4');
console.log(cards)