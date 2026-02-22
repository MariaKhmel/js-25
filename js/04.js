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

// console.log(filteredArr)