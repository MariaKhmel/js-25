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

const fnA = function (parameter) {
  const innerVariable = "innerVariable inside fnA"
  const fnB = function () {
    console.log(parameter);
    console.log(innerVariable);
    console.log("console inside FnB")
  }

  return fnB;
}
const fnC = fnA(555);
fnC()