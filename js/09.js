/*
 * Array.prototype.forEach(callback(currentValue, index, array), thisArg)
 * - Поэлементо перебирает оригинальный массив
 * - Ничего не возвращает
 * - Заменяет классический for, если не нужно прерывать цикл
 */

// const numbers = [5, 10, 15, 20, 25];

// numbers.forEach(function (number) {
//     console.log('number', number);
// });

// console.log(numbers);

// const numbers = [2, 5, 7, 8];
// numbers.forEach(function (el, index, arr) {
//     console.log(el)
// })

// numbers.forEach((el, idx, arr)=>{
//     console.log(el)
// })


/*
 * Array.prototype.map()
 * - Поэлементо перебирает оригинальный массив
 * - Не изменяет оригинальный массив
 * - Возвращает новый массив такой же длины
 */

// const numbers = [5, 10, 15, 20, 25];


// const doubledNums = numbers.map((el) => el * 2);
// console.log(doubledNums);

// const doubledNums = numbers.map(number => {
//     return number * 3;
// });
// console.log('numbers', numbers);
// console.log('doubledNums', doubledNums);

// const players = [
//     { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//     { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//     { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//     { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//     { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
// ];




// const playerNames = players.map(el => el.name);
// console.log(playerNames)
// console.table(players);

/*
 * Получаем массив имён всех игроков
 */

// const playerNames = players.map(player => player.name);
// console.log('playerNames', playerNames);

// const playerIds = players.map(player => player.id);
// console.log('playerIds', playerIds);

// const res = players.map(({ name, online }) => ({ name, online }));
// console.log('res', res);

// const res = players.map(({ name, online }) => ({ name, online }));
// console.log(res)


// const updtedPlayers = players.map((player) => ({
//     ...player,
//     points: Math.round(player.points * 1.1),
// }));
// console.log(updtedPlayers)

/*
 * Увеличиваем кол-во поинтов каждого игрока на 10%
 */

// const upatedPlayers = players.map(player => ({
//     ...player,
//     points: player.points * 1.1,
// }));

// console.table(upatedPlayers);
// console.log(upatedPlayers);

/*
 * Увеличиваем кол-во часов игрока по id
 */

// const playerIdToUpdate = 'player-3';

// const players = [
//     { id: "playerid-1", name: "playername-1", timeplayed: 300, points: 100, online: false },
//     { id: "playerid-2", name: "playername-2", timeplayed: 500, points: 200, online: true },
//     { id: "playerid-3", name: "playername-3", timeplayed: 300, points: 100, online: false },
//     { id: "playerid-4", name: "playername-4", timeplayed: 700, points: 200, online: true },
// ]
// const playerIdToUpdate = "playerid-3";


// const updatePlayer = players.map(player => {
//     if (player.id === playerIdToUpdate) {
//         return ({
//             ...player,
//             timeplayed:player.timeplayed+33,
//         })
//     }
//     return player;
// })
// console.log(players)
// console.log(updatePlayer)


// const updatedPlayers = players.map(player => {
//     if (playerIdToUpdate === player.id) {
//         return {
//             ...player,
//             timePlayed: player.timePlayed + 100,
//         };
//     }

//     return player;
// });

// const updatedPlayers = players.map(player =>
//   playerIdToUpdate === player.id
//     ? { ...player, timePlayed: player.timePlayed + 100 }
//     : player,
// );
// console.table(updatedPlayers);

/*
 * Array.prototype.filter()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает новый массив (с элементами или пустой)
 * - Добавляет в возвращаемый массив элементы которые удовлетворяют условию коллбек-функции
 *    - если коллбек вернул true элемент добавляется в возвращаемый массив
 *    - если коллбек вернул false элемент НЕ добавляется в возвращаемый массив
 */

// const numbers = [5, 10, 15, 20, 25];

// const filteredNumbers = numbers.filter(number => number < 10 || number > 20);
// console.log(filteredNumbers);

// const filteredNumbers = numbers.filter(number => number < 10 || number > 20);
// console.log(filteredNumbers);

// const players = [
//     { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//     { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//     { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//     { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//     { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
// ];

/*
 * Получаем массив всех онлайн игроков
 */


// const onlinePlayers = players.filter(({ online }) => online);
// const onlinePlayers = players.filter(function (player) {
//     return player.online;
// })
// console.log(onlinePlayers);

// const onlinePlayers = players.filter(({ online }) => online);
// console.table(onlinePlayers);

/*
 * Получаем массив всех оффлайн игроков
 */

// const offlinePlayers = players.filter(player => !player.online);

// const offlinePlayers = players.filter(player => !player.online);
// console.table(offlinePlayers);

/*
 * Получаем список хардкорных игроков с временем больше 250
 */

// const hardcorePlayers = players.filter(player => player.timePlayed > 250);
// const hardcorePlayers = players.filter(function (player) {
//     return player.timePlayed > 20;
// })
// console.table(hardcorePlayers);


/*
 * Array.prototype.find()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает первый элемент удовлетворяющий условию или undefined
 */

// const numbers = [5, 10, 15, 20, 25];

// const number = numbers.find(number => number === 10);
// const numberToFind = numbers.find((number) => number === 21);
// console.log(numberToFind)
// console.log(number);

// const players = [
//     { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//     { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//     { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//     { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//     { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
// ];

// const playerIdToFind = "player-1";
// const findPlayerById = players.find(({id})=>playerIdToFind === id)
// console.log(findPlayerById)

// const findPlayerById = function (allPlayers, playerIdToFind) {
//     return allPlayers.find((player) => player.id === playerIdToFind);
// }

// console.log(findPlayerById(players, "player-2"));
 /*
 * Ищем игрока по id
 */
// const playerIdToFind = 'player-3';
// const playerWithId = players.find(({ id }) => id === playerIdToFind);
// console.log(playerWithId);

// const finPlayerById = (allPlayer, playerId) => {
//     return allPlayer.find(({ id }) => id === playerId);
// };

// console.log(finPlayerById(players, 'player-1'));
// console.log(finPlayerById(players, 'player-4'));

/*
 * Ищем игрока по имени
 */
// const playerNameToFind = 'Poly';
// const playerWithName = players.find(player => player.name === playerNameToFind);
// console.log(playerWithName);

// const playerNameToFind = "Poly";
// const findNameByName = players.find((player) => player.name === playerNameToFind);
// console.log(findNameByName)

// const players = [
//     { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: true },
//     { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: false },
//     { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//     { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//     { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
// ];

/*
 * Array.prototype.every()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает true если все элементы массива удовлетворяют условию
 */

// const isAllOnline = players.every(player => player.online);
// console.log('isAllOnline: ', isAllOnline);

// const isOnline = players.every(player => player.online === true);
// console.log(isOnline)

// const isAnyOnline = players.some(player => player.online);
// console.log("isAnyOnline", isAnyOnline);
/*
 * Array.prototype.some()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает true если хотя бы один элемент массива удовлетворяет условию
 */
// const isAnyOnline = players.some(player => player.online);
// console.log('isAnyOnline: ', isAnyOnline);

// const anyHardcorePlayers = players.some(player => player.timePlayed > 400);
// console.log('anyHardcorePlayers: ', anyHardcorePlayers);

/*
 * Array.prototype.reduce()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает что угодно 🤯
 * - Заменяет всё на свете, но использовать нужно с умом
 */

// const numbers = [5, 10, 15, 20, 25];

// const total = numbers.reduce(function (acc, el, idx, arr) {
//     return acc += el;
// },0)
// console.log(total);

// accumulator = 0 -> number = 5 -> return 0 + 5
// accumulator = 5 -> number = 10 -> return 5 + 10
// accumulator = 15 -> number = 15 -> return 15 + 15
// accumulator = 30 -> number = 20 -> return 30 + 20
// accumulator = 50 -> number = 25 -> return 50 + 25

/*
 * Считаем общую зарплату
 */

// const salary = {
//     mango: 100,
//     poly: 50,
//     ajax: 150,
// };

// const totalSalary = Object.values(salary).reduce((acc, el) => acc + el, 0);
// console.log(totalSalary)
// let result = 0;
// const totalSalary = Object.values(salary).forEach(el=>result+=el)
// console.log(result)
// console.log(totalSalary);

/*
 * Считаем общее количество часов
 */

// const players = [
//     { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
//     { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
//     { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
//     { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
//     { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
// ];

// const totalTimePlayed = players.reduce((acc, el) => {
//     return acc + el.timePlayed;
// }, 0)
// console.log(totalTimePlayed)
// console.log(totalTimePlayed);

/*
 * Считаем общую сумму товаров корзины
 */
// const cart = [
//     { label: 'Apples', price: 100, quantity: 2 },
//     { label: 'Bananas', price: 120, quantity: 3 },
//     { label: 'Lemons', price: 70, quantity: 4 },
// ];

// const totalAmount = cart.reduce(function (acc, el) {
//     return acc + (el.price * el.quantity);
// }, 0)
// console.log(totalAmount);

/*
 * Собираем все теги из твитов
 */

// console.log(allTags)

// acc = [], tweet.tags = ['js', 'nodejs'] return [...[], ...['js', 'nodejs']]
// acc = ['js', 'nodejs'] tweet.tags ['html', 'css']
// return  [...['js', 'nodejs'], ...['html', 'css']]
//  ['js', 'nodejs', 'html', 'css']

/*
 * Ведём статистику тегов
 */
// const tagsStats = allTags.reduce((acc, tag) => {
//   console.log(acc);

//   if (acc[tag]) {
//     acc[tag] += 1;

//     return acc;
//   }

//   acc[tag] = 1;

//   return acc;
// }, {});

// const tweets = [
//     { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//     { id: '001', likes: 2, tags: ['html', 'css'] },
//     { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//     { id: '003', likes: 8, tags: ['css', 'react'] },
//     { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// const allTags = tweets.reduce((acc, el) => {
//     return [...acc, ...el.tags];
// }, [])

// console.log(allTags)

// const tagStats = allTags.reduce((acc, tag) => {
//    console.log(acc[tag])
//     // if (acc[tag]) {
//     //     acc[tag] += 1;
//     //     return acc;
//     // }
//     // acc[tag] = 1;
//     // return acc;

    
//     return {
//         ...acc,
//         [tag]: acc[tag] ? acc[tag] + 1 : 1,
//     }

 
// }, {})


// console.log(tagStats)














// const tagsStats = allTags.reduce((acc, tag) => {
//     return {
//         ...acc,
//         [tag]: acc[tag] ? acc[tag] + 1 : 1,
//     };
// }, {});
// console.log(tagsStats);

// если свойство с ключом tag есть. увеличить его значение на 1
// если свойствоства нет с таким ключом что в tag, сделать и записать 1

/*
 * Array.prototype.sort(callback(currentEl, nextEl){})
 * - Сортирует и ИЗМЕНЯЕТ оригинальный массив
 * - По умолчанию:
 *    - сортирует по возрастанию
 *    - приводит элементы к строке и сортирует по [Unicode](https://unicode-table.com/en/)
 */

// const numbers = [1, 9, 6, 2, 3];
// numbers.sort();
// console.log('numbers', numbers);

// const letters = ['b', 'B', 'a', 'A'];
// letters.sort();
// console.log('letters', letters);

/*
 * compareFunction - функция сравнения (callback)
 * Элементы массива сортируются в соответствии с её возвращаемым значением
 *  - eсли compareFunction(A, B) меньше 0, сортировка поставит A перед B
 *  - если compareFunction(A, B) больше 0, сортировка поставит B перед A
 *  - если compareFunction(A, B) вернёт 0, сортировка оставит A и B на неизменными по отношению друг к другу, но отсортирует их по отношению ко всем другим элементам.
 */

// const numbers = [2, 5, 1, 3, 4, -5, 8];

// numbers.sort((currentEl, nextEl) => {
//     return nextEl - currentEl;
// })

// console.log(numbers)

/*
 * Как сделать копию массива чтобы не сортировать оригинальный
 * - Array.prototype.slice()
 * - Операция spread
 */



// const descSortedNumbers = [...numbers].sort((a, b) => b - a);
// const ascSortedNumbers = [...numbers].sort((a, b) => a - b);

// const descSortedNumbers = [...numbers].sort((a, b) => b - a);
// const ascSortedNumbers = [...numbers].sort((a, b) => a - b);
// console.log('descSortedNumbers', descSortedNumbers);
// console.log('ascSortedNumbers', ascSortedNumbers);

/*
 * Кастомная сортировка сложных типов
 */
// const players = [
//     { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
//     { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
//     { id: 'player-3', name: 'Aiwi', timePlayed: 230, online: true },
//     { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
//     { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
// ];

// По игровому времени
// const sortedByBestPlayers = [...players].sort(
//     (prevPlayer, nextPlayer) => nextPlayer.timePlayed - prevPlayer.timePlayed,
// );

// const sortedByBestPlayers = [...players].sort((prevPlayer, nextPlayer) => prevPlayer.timePlayed - nextPlayer.timePlayed);
// console.table(sortedByBestPlayers);

// const sortedByWorstPlayers = [...players].sort(
//     (prevPlayer, nextPlayer) => prevPlayer.timePlayed - nextPlayer.timePlayed,
// );

// const sortedByWorstPlayers = [...players.sort(function (prevPlayer, nextPlayer) {
//     return nextPlayer.timePlayed - prevPlayer.timePlayed;
// })]
// console.table(sortedByWorstPlayers);

// const byName = [...players].sort((a, b) => {
//     const result = a.name[0] > b.name[0];

//     if (result) {
//         return 1;
//     }

//     if (!result) {
//         return -1;
//     }
// });


// const byName = [...players].sort(function (prevPlayer, nextPlayer) {
//     const result = prevPlayer.name[0] > nextPlayer.name[0];
//     if (result) {
//         return 1;
//    }
//     if (!result) {
//         return -1;
// }
// })

// console.table(byName);

/*
 * Array.prototype.flat(depth)
 * - Разглаживает массив до указанной глубины
 * - По умолчанию глубина 1
 */

// const array = [1, 2, [4, [5]], [6, [7, 8, [9]]]];
// console.log(array.flat(3));

// console.log(array.flat(2))

/*
 * Array.prototype.flatMap(callback)
 * - Комбинация map + flat
 */

// const tweets = [
//     { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//     { id: '001', likes: 2, tags: ['html', 'css'] },
//     { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//     { id: '003', likes: 8, tags: ['css', 'react'] },
//     { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];
// const tags = tweets.flatMap(el => el.tags);

// console.log(tags)

// const tags = tweets.flatMap(t => t.tags);
// console.log(tags);


// const stats = tags.reduce((acc, tag) => {
//     return {
//         ...acc,
//         [tag]: acc[tag] ? acc[tag] + 1 : 1
//     }
// }, {});






// const stats = tags.reduce((acc, tag) => {
//     return {
//         ...acc,
//         [tag]: acc[tag] ? acc[tag] + 1 : 1,
//     };
// }, {});

// const stats = tweets
//     .flatMap(tweet => tweet.tags)
//     .reduce(
//         (acc, tag) => ({
//             ...acc,
//             [tag]: acc[tag] ? acc[tag] + 1 : 1,
//         }),
//         {},
//     );

// console.log(stats);

/*
 * Цепочки вызовов - chaining
 */
const numbers = [1, 5, 2, 4, 3];

const greaterThanTwo = numbers.filter(el => el > 2);
// console.log(greaterThanTwo);

const multiplyByThree = greaterThanTwo.map(el => el * 3);
// console.log(multiplyByThree);

// const sorted = multiplyByThree.sort((a, b) => a - b);
// console.log(sorted);
// const sorted = numbers.filter(el => el > 2).map(el => el * 3).sort((a, b) => a - b);

// console.log(sorted)
// const greaterThenTwo = numbers.filter(num => num > 2);
// console.log(greaterThenTwo);

// const multByThree = greaterThenTwo.map(num => num * 3);
// console.log(multByThree);

// const sorted = multByThree.sort((a, b) => a - b);
// console.log(sorted);

// Цепочка предыдущих трёх
// const sorted = numbers
//     .filter(num => num > 2)
//     .map(num => num * 3)
//     .sort((a, b) => a - b);

// console.log(sorted);

/*
 * Сортируем тех кто онлайн по рангу
 * - сначала фильтруем
 * - потом сортируем
 */
// const players = [
//     { id: 'id-1', tag: 'Mango', isOnline: true, rank: 800 },
//     { id: 'id-2', tag: 'Poly', isOnline: false, rank: 600 },
//     { id: 'id-3', tag: 'Ajax', isOnline: true, rank: 100 },
//     { id: 'id-4', tag: 'Kiwi', isOnline: true, rank: 400 },
//     { id: 'id-5', tag: 'Chelsy', isOnline: false, rank: 200 },
// ];




// const onlineAndSorted = players.filter(el => el.isOnline)
//     .sort((a, b) => {
//         if (a.tag > b.tag) {return 1};
//         if (a.tag < b.tag) { return -1 };
    
//         return 0;
//     });

// const onlineAndSorted = players.filter(el => el.isOnline)
//     .sort((a, b) => a.rank - b.rank);

// console.log(onlineAndSorted)

// const onlineAndSorted = players
//     .filter(player => player.isOnline)
//     .sort((playerA, playerB) => playerA.rank - playerB.rank);

// console.table(onlineAndSorted);

/*
 * Chaining в методах объекта как jquery
 */

// const element = {
//     class: '',
//     hovered: false,
//     changeClass(cls) {
//         this.class = cls;

//         return this;
//     },
//     toggleHovered() {
//         this.hovered = !this.hovered;

//         return this;
//     },
// };

// element.toggleHovered().changeClass('open').toggleHovered();
// console.log(element);

// const element = {
//     class: "",
//     hovered: false,
//     changeClass(cls) {
//         this.class = cls;
//         console.log(this);
//         return this;
//     },
//     toggleHovered() {
//         this.hovered = !this.hovered;
//         return this;
//     },
// }
// element.toggleHovered().changeClass("open").toggleHovered();
// console.log(element)


/*
 * get()
 *
 * - user && user.location && obj.location.city
 * - user?.location?.city
 */

// const user = {
//     name: 'mango',
//     location: {
//         city: "lviv"
//     },
// };
// console.log(user && user.test && user.test.test)

// const result = Object.values(user).filter(el=>typeof(el)==="string").map(el => el[0].toUpperCase()+el.slice(1));
// console.log(result)

// const capitalize = function (str) {
//     return str[0].toUpperCase() + str.slice(1);
// }



// for (const key in user) {
//     const value = user[key];
    
//     if (typeof value === "object") {
//         for (const innerkey in value) {
//            value[innerkey] = capitalize(value[innerkey]);
//         }
//     } else {
//       value = capitalize(value);
//     }
// }
// console.log(user)

// const user = {
//     name: 'mango',
//     location: {
//         city: { test: "lviv" }
//     },
// };

// const capitalize = str => str[0].toUpperCase() + str.slice(1);
// const result = [];

// function collectValues(obj) {
//     for (const key in obj) {
//         const val = obj[key];

//         if (typeof val === "object") {
//             collectValues(val); // 🔄 calls itself if nested
//         } else {
//             result.push(capitalize(val));
//         }
//     }
// }

// function collectValues(obj) {
//     for (const key in obj) {
//         if (!obj.hasOwnProperty(key)) {
//             continue;
//          }
//             const value = obj[key];
//             if (typeof value === "object") {
//                 collectValues(value);
//             } else {
//                 result.push(capitalize(value))
//             }
        
// }
// }

// collectValues(user);
// console.log(result); // ["Mango", "Lviv"]

console.log(Math.random())