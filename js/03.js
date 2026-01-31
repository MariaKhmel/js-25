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

/*
 * Напиши функцию findSmallesNumber(numbers) для поиска самого маленького числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */

// const findSmallesNumber = function (numbers) {
//   let smallestNumber = numbers[0];
//   for (const number of numbers) {
//     if (number < smallestNumber) {
//       smallestNumber = number;
//     }
//   }
//   return smallestNumber;

// }

// console.log(findSmallesNumber([11, 4, 6, 71, 3, 55, 5]));

/*
 * Напиши функцию changeCase(string) которая заменяет регистр
 * каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
 */

// const changeCase = function (string) {
//   const letters = string.split("");
//   let invertedString = "";

//   for (const letter of letters) {
//     const isLowerCase = letter.toLowerCase() === letter;

//     isLowerCase ?
//       invertedString += letter.toUpperCase() : invertedString += letter.toLowerCase();
//   }
//   return invertedString;
// }

// console.log(changeCase("JavaScript"));

/*
 * Напиши функцию slugify(string) которая получает строку и возвращает URL-slug
 * Строка состоит только из букв и пробелов
 */

// const slugify = function (string) {
//   return string.split(" ").join("-");

// }

// console.log(slugify("This is my string"));

/*
 * Напиши функцию filterNumbers(array [, number1, ...]) которая:
 * - первым аргументом принимает массив чисел
 * - после первого аргумента может быть произвольное количество других аргументов которые будут числами.
 * - Функция должна вернуть новый массив, в котором будут только те аргументы, начиная со второго,
 *   для которых есть аналог в оригинальном массиве.
 */

// const filterNumbers = function (numbersArray, ...args) {
//   let newArr = [];

//   for (const number of args) {
//     if (numbersArray.includes(number)) {
//       newArr.push(number);
//     }
//   }

//   return newArr;
// }

// console.log(filterNumbers([1, 2, 3, 4, 5], 6, 3));


// const add = function (...args) {
//   let sum = 0;

//   for (const number of args) {
//     sum += number;
//   }

//   return sum;
// }

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 3, 4));

// const res = new Set([1, 2, 34, 2]);
// console.log(res);
// console.log(res);

/*
 * Объекты (делаем плейлист музыки: имя, рейтинг, треки, кол-во треков)
 * - Литерал объекта
 * - Свойства, ключи (имя) и значения
 * - Как отличить объект от области видимости
 */

/* - changeName
 * - addTrack
 * - updateRating
 * - getTrackCount
 */

// const playList = {
//   name: "my playlist",
//   rating: 6,
//   tracks: ["track-1", "track-2", "track-3", "track-4"],
//   trackCount: 4,
//   changeName(newName) {
//     this.name = newName;
//   },
//   addTrack(newTrack) {
//     this.tracks.push(newTrack);
//   },
//   updateRating(newRating) {
//     this.rating = newRating;
//   },
//   getTrackCount() {
//     return this.tracks.length;
//   }
// }

// playList.changeName("newName");
// console.log(playList.name);
// playList.addTrack("track-5");
// console.log(playList.tracks);
// console.log(playList.getTrackCount());
// playList.updateRating(8);
// console.log(playList.rating);