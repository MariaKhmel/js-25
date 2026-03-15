// const doMath = function (a, b, callback) {
//   const result = callback(a, b);
//   console.log(result);

// }

// const add = function (x, y) {
//   return x + y;
// }

// const sub = function (x, y) {
//   return x - y;
// }

// doMath(4, 5, add);
// doMath(4, 5, sub);


// doMath(4, 5, function (x, y) {
//   return x - y;
//  });

// fetch("https://pokeapi.co/api/v2/pokemon/ditto").then(r => r.json()).then(res => console.log(res))

// const arr = [1, 2, 3, 4, 5, 7];
// const filteredArr = [];

// function callback(el) {
//   return el > 5;
// }

// const filter = function (arr, callback) {
//   for (const el of arr) {
//     const passed = callback(el);
//     if (passed) {
//       filteredArr.push(el);
//     }
//   }
// }

// filter(arr, callback);

// console.log(filteredArr);

// const fruits = [
//   { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },
// ];


// const getFruitWithQuantity = function (fruit) {
//   return fruit.quantity >= 120;
// }

// const filter = function (arr, filterFunc) {
//   const filteredArr = [];
//   for (const el of arr) {
//     const passed = filterFunc(el);
//     if (passed) {
//       filteredArr.push(el);
//     }
//   }
//   return filteredArr;
// }
// console.log(filter(fruits, getFruitWithQuantity));

// const fnA = function (parameter) {
//   const innerVariable = "innerVariable inside fnA"
//   const fnB = function () {
//     console.log(parameter);
//     console.log(innerVariable);
//     console.log("console inside FnB")
//   }

//   return fnB;
// }
// const fnC = fnA(555);
// fnC()

// const makeDish = function (cheff) {
//   return function (dish) {
//     console.log(cheff + " " + "cooks" + " " + dish);
//   }
// }

// const mango = makeDish("Mango");
// const polly = makeDish("Polly");

// mango("dish1");

// const makeChef = function (chef) {
//   const makeDish = function (dish) {
//     // console.log(chef + " " + "cooks" + " " + dish);
//     console.log(`${chef} cooks ${dish}`);
//   }
//   return makeDish;
// }

// const mango = makeChef("Mango");
// mango("dish1");

// console.dir(mango);

// const floatingPoint = 3.65678;
// const someInt = Math.round(floatingPoint);
// const withDecimals = Number(floatingPoint.toFixed(2));

// function rounder(digits) {
//   return function (num) {
//     console.log(Number(num.toFixed(digits)));
//   }
// }

// const rounder2 = rounder(2);
// rounder2(5.6666);//5.67

// const libFactory = function () {
//   const value = 999;
//   function add(num) {
//     return value += num;
//   }
//   return {
//     add,
//     getValue: function () {
//       return value;
//     }
//   }
// }

// const myLib = libFactory();
// console.log(myLib.getValue(5));
// console.dir(myLib.getValue)

// const salaryFactory = function (employeeName, baseSalary = 0) {
//   let salary = baseSalary;

//   return {
//     current: function () {
//       return `Current ${employeeName}'s salary is ${salary}`;
//     },
//     add: function (amount) {
//       salary += amount;
//       return salary;
//     },
//     sub: function (amount) {
//       salary -= amount;
//       return salary;
//     }
//   }
// }

// const managerSalary = salaryFactory("Tom", 2000);
// console.log(managerSalary.current())
// console.log(managerSalary.add(100));
// console.log(managerSalary.sub(100));
// console.dir(managerSalary.current);

// const user = {
//   tag: 'Mango',
//   showTag() {
//     console.log('showTag -> this', this);
//     console.log('showTag -> this.tag', this.tag);
//     const inner = function () {
//       console.log(this, "in inner")
//     }
//     inner()

//   },
// };

// user.showTag();

// const User = function (name) {
//   this.name = name;
// }

// const test = new User("g");
// console.log(test.name)

/*
 * Array.prototype.forEach(callback(currentValue, index, array), thisArg)
 * - Поэлементо перебирает оригинальный массив
 * - Ничего не возвращает
 * - Заменяет классический for, если не нужно прерывать цикл
 */

// const numbers = [5, 10, 15, 20, 25];

// numbers.forEach(function (el, index, arr) {
//   console.log(el);
// }
// )

/*
 * Array.prototype.map()
 * - Поэлементо перебирает оригинальный массив
 * - Не изменяет оригинальный массив
 * - Возвращает новый массив такой же длины
 */

// const numbers = [5, 10, 15, 20, 25];

// function doubledArr(numbers) {
//   return numbers.map(num => num * 2);

// }

// console.log((doubledArr(numbers)));

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
// ];

// const playersNames = players.map(player => player.name);
// console.log(playersNames);

// const playerIds = players.map(el => el.id);
// console.log(playerIds)

/*
 * Увеличиваем кол-во поинтов каждого игрока на 10%
 */

// const updatePlayerPoints = players.map(player => ({
//   ...player,
//   points: player.points * 1.1,
// }))

// console.log(players);
// console.log(updatePlayerPoints);

/*
 * Увеличиваем кол-во часов игрока по id
 */

// const playerIdToUpdate = 'player-3';

// const updatePlayerTime = players.map(function (player) {
//   if (player.id === playerIdToUpdate) {
//     player.timePlayed += 100;
//   }
//   return player;
// })

// console.log(updatePlayerTime);

// const numbers = [5, 10, 15, 20, 25];

// const filteredNumbers = numbers.filter(num => num > 15);
// console.log(filteredNumbers);

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
// ];

/*
 * Получаем массив всех онлайн игроков
 */

// const onlinePlayers = players.filter(function (player) {
//   return player.online;
// })
/*
 * Получаем массив всех оффлайн игроков
 */

// const offlinePlayers = players.filter(player => !player.online)
// console.log(offlinePlayers);

/*
 * Получаем список хардкорных игроков с временем больше 250
 */

// function hardcodePlayers(players) {
//   return players.filter(({ timePlayed }) => timePlayed > 250);
// }

// console.log(hardcodePlayers(players));


// const numbers = [5, 10, 15, 20, 25];

// const number = numbers.find(number => number > 35);
// console.log(number);

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
];

// const playerIdToFund = 'player-3';

// const player = players.find(el => el.id === playerIdToFund);
// console.log(player)

/*
 * Array.prototype.every()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает true если все элементы массива удовлетворяют условию
 */

// const isAllOnline = players.every(player => {
//   return player.online;
// })

// console.log(isAllOnline)

// function isAnyOnline(players) {
//   return players.some(function (player) {
//     return player.online;
//   })
// }
// console.log(isAnyOnline(players));
// const numbers = [5, 10, 15, 20, 25];

// const sum = numbers.reduce(function (acc, el) {
//   return acc += el;
// }, 0);
// console.log(sum)

const salary = {
  x: 22,
  y: 44,
  z: 87
}


function calculateTotalSalary(obj) {
  // const values = Object.values(obj);
  let values = [];
  for (const el in obj) {
    values.push(obj[el]);
  }
  return values.reduce((acc, el) => {
    return acc += el;
  }, 0)
}

console.log(calculateTotalSalary(salary));