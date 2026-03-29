// const numbers = [1, 3, 5, 6, 7];

// console.log([9, 5, 3, 4, 5].reverse());

// function sortAsc(numbers) {
//   return numbers.sort(function (currentNum, nextNum) {
//     return currentNum - nextNum;
//   })
// }

// console.log(sortAsc(numbers));


// const sortDesc = (numbers) => numbers.sort((a, b) => b - a);
// console.log(sortDesc(numbers))

// const players = [
//   { id: 'id-1', name: 'Mango', timePlayed: 120, online: false },
//   { id: 'id-2', name: 'Poly', timePlayed: 150, online: false },
//   { id: 'id-3', name: 'Ajax', timePlayed: 60, online: true },
//   { id: 'id-4', name: 'Chelsey', timePlayed: 770, online: true },
// ]

// const sortByBestPlayers = function (players) {
//   return [...players].sort(function (currentEl, nextEl) {
//     return nextEl.timePlayed - currentEl.timePlayed
//   })
// }


// function sortByWorstPlayers(players) {
//   const copyofPlayers = Array.from(players);
//   return copyofPlayers.sort(function (currentPlayer, nextPlayer) {
//     return currentPlayer.timePlayed - nextPlayer.timePlayed;
//   })

// }
// console.log(sortByWorstPlayers(players))
// console.log(sortByBestPlayers(players));

// const byName = (players) => players.sort((a, b) => {
//   const result = a.name[0] > b.name[0];
//   console.log('result=>', result, a.name[0], b.name[0]);

//   if (result) {
//     return 1;
//   }

//   if (!result) {
//     return - 1;
//   }
// })


// console.log(byName(players))

// const array = [1, 2, [4, [5]], [6, [7, 8, [9]]]];
// console.log(array.flat(2));

// console.log('[] === []: ', [] === []);
// console.log('{} === {}: ', {} === {});
// console.log(
//     'function() {} === function() {}: ',
//     function () {} === function () {},
// );

// const fnA = function () {
//     console.log('hello');
// };

// const fnB = fnA;
// console.log('fnB === fnA: ', fnB === fnA);



// const showTag = function () {
//   console.log("showtag this ->", this);
//   console.log("showtag this.tag ->", this.tag);
// }

// const user = {
//   tag: "Mango",
// }

// user.showTag = showTag;

// user.showTag()

// const makeChangeColor = function () {

//   const changeColor = function (color) {
//     console.log("this in changeColor func ->", this);
//     // this.color = color;
//   }

//   const sweater = {
//     color: "teal",
//   }

//   sweater.updateColor = changeColor;

//   return sweater.updateColor;
// }

// const swapColor = makeChangeColor();
// swapColor("blue");
// console.log(swapColor)

const counter = {
  value: 0,
  increment: function (value) {
    console.log("this in increment ->", this);
    this.value += value;
  },
  decrement: function (value) {
    console.log("this in decrement ->", this);
    this.value -= value;
  }
}

const updateCounter = function (value, operation) {
  operation(value);
}

updateCounter(10, counter.increment.bind(counter));
updateCounter(16, counter.decrement.bind(counter));



// const changeColor = function (color) {
//   console.log("change color ->", this);
//   this.color = color;
// }

// const hat = {
//   color: "black",
// }

// changeColor.call(hat, "blue")
// console.log(hat)