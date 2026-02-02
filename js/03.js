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

// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// function totalFeedback(feedback) {
//   const keys = Object.keys(feedback);
//   let sum = 0;
//   for (const key of keys) {
//     sum += feedback[key];
//   }
//   return sum;
// }

// console.log(totalFeedback(feedback));


const friends = [
  { name: 'Mango', online: false },
  { name: 'Kiwi', online: true },
  { name: 'Poly', online: false },
  { name: 'Ajax', online: false },
];

// const findFriendsByName = function (allFriends, friendName) {
//   for (const friend of allFriends) {
//     if (friend.name === friendName) {
//       return "FOUND";
//     }
//   }
//   return "NOT FOUND";
// }

// const findFriendsByName = (allFriends, friendName) =>
//   allFriends.some(friend => friend.name === friendName);

// console.log(findFriendsByName(friends, "Poly"));
// console.log(findFriendsByName(friends, "Poly1"));

// const getAllNames = function (allFriends) {
//   let allFriendNames = [];
//   for (const friends of allFriends) {
//     allFriendNames.push(friends.name);
//   }
//   return allFriendNames;
// }

// const getAllNames = (allFriends) => allFriends.map(friend => friend.name);

// console.log(getAllNames(friends));

// const getOnlineFriends = function (allFriends) {
//   const onlineFriends = [];
//   for (const friend of allFriends) {
//     if (friend.online) {
//       onlineFriends.push(friend.name);
//     }
//   }
//   return onlineFriends;

// }


// const getOnlineFriends = allFriends =>
//   allFriends.filter(friend => friend.online)
//     .map(friend => friend.name);
// console.log(getOnlineFriends(friends));

// const getOfflineFriends = allFriends =>
//   allFriends.filter(friend => !friend.online)
//     .map(friend => friend.name);
// console.log(getOfflineFriends(friends));

// const getOnlineFriend = (allFriends = []) =>
//   allFriends.reduce((acc, friend) => {
//     if (friend && friend.online) {
//       acc.push(friend.name);
//     }
//     return acc;
//   }, []);

// console.log(getOnlineFriend(friends));

// const getOnlineFriends = function (allFriends = [], returnObjects = false) {
//   if (!Array.isArray(allFriends)) return [];
//   const onlineFriendsObj = allFriends.filter(friend => friend.online);
//   const onlineFriendNames = onlineFriendsObj.map(f => f.name);
//   return returnObjects ? onlineFriendsObj : onlineFriendNames;
// }

// console.log(getOnlineFriends(friends));

// const getFriendsByStatus = function (allFriends = []) {
//   if (Array.isArray(allFriends)) return {online:[], offline:[]};
//   const friendsByStatus = {
//     online: [],
//     offline: [],
//   }

//   for (const friend of allFriends) {
//     if (friend.online) {
//       friendsByStatus.online.push(friend.name);
//     } else {
//       friendsByStatus.offline.push(friend.name);
//     }
//   }

//   return friendsByStatus;

// }

// const getFriendsByStatus = function (allFriends = [], { returnObjects = false } = {}) {
//   if (!Array.isArray(allFriends)) return { online: [], offline: [] };

//   return allFriends.reduce((acc, friend) => {
//     if (!friend) return acc;
//     const key = friend.online ? "online" : "offline";
//     acc[key].push(returnObjects ? friend : friend.name);
//     return acc;
//   }, { online: [], offline: [] });

// }

// console.log(getFriendsByStatus(friends, { returnObjects: true }));

// const getFriendsByStatus = allFriends => ({
//   online: allFriends.filter(f => f.online).map(f => f.name),
//   offline: allFriends.filter(f => !f.online).map(f => f.name),
// })

// console.log(getFriendsByStatus(friends));

/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 */

const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    this.items.push(product);
  },
  // remove(productName) {
  //   for (const item of this.items) {
  //     const productToDeleteIdx = item.name.indexOf(productName);
  //     if (productToDeleteIdx !== -1) {
  //       this.items.splice(productToDeleteIdx, 1);
  //     }
  //   }
  // },
  // remove(productName) {
  //   const idx = this.items.
  //     findIndex(item => item.name === productName);
  //   this.items.splice(idx, 1);
  // },
  remove(productName) {
    this.items = this.items.filter(item => item.name !== productName)
  },
  clear() {
    this.items = [];
  },
  // countTotalPrice() {
  //   let sum = 0;
  //   for (const item of this.items) {
  //     sum += item.price;
  //   }
  //   return `Total is ${sum}`;
  // },
  countTotalPrice() {
    const sum = this.items.reduce((acc, item) => {
      acc += item.price;
      return acc;
    }, 0);
    return `Total is ${sum}`;
  },

  increaseQuantity(productName) {
    for (const item of this.items) {
      if (item.name === productName) {
        item['quantity'] += 1;
      }
    }
  }

}

cart.add({ name: 'ff', price: 50 });
cart.add({ name: 'dd', price: 50 });
cart.add({ name: 'cc', price: 50 });
cart.remove("ff");
console.log(cart.items);
console.log(cart.countTotalPrice());
cart.increaseQuantity('dd');
console.log(cart.items)