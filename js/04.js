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
