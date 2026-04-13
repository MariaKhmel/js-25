// function promiseAll(promises) {
//   return new Promise((resolve, reject) => {
//     if (promises.length === 0) return resolve([]);

//     const results = new Array(promises.length);
//     let resolved = 0;

//     promises.forEach((p, i) => {
//       Promise.resolve(p).then((val) => {
//         results[i] = val;
//         resolved++;
//         if (resolved === promises.length) resolve(results);
//       }).catch(reject);
//     });
//   });
// }

// function promiseAll(promises) {
//   return new Promise((resolve, reject) => {
//     if (promises.length === 0) resolve([]);

//     const results = new Array(promises.length);
//     let resolved = 0;
//     promises.forEach((p, i) => {
//       Promise.resolve(p).then((val) => {
//         results[i] = val;
//         resolved++;
//         if (resolved === promises.length) resolve(results);
//       }).catch(reject);
//     })
//   })
// }


// function promiseAll(promises) {
//   return new Promise((resolve, reject) => {
//     if (promises.length === 0) resolve([]);

//     const results = new Array(promises.length);
//     let resolved = 0;

//     promises.forEach((promise, i) => {
//       Promise.resolve(promise).then((val) => {
//         results[i] = val;
//         resolved++;
//         if (resolved === promises.length) resolve(results);
//       }).catch(reject);
//     })
//   })
// }

// promiseAll([
//   Promise.resolve(1),
//   Promise.resolve(2),
//   Promise.resolve(3)
// ]).then(console.log)  // [1, 2, 3]

// promiseAll([Promise.resolve(1), Promise.reject("error"), Promise.resolve(2)]).catch(console.log);

// promiseAll([
//   new Promise(resolve => setTimeout(() => resolve("slow"), 300)),
//   new Promise(resolve => setTimeout(() => resolve("fast"), 100))
// ]).then(console.log)

// class Dog {
//   constructor({ name } = {}) {
//     this.name = name;
//   }
//   bark() {
//     console.log("bark");
//   }
// }

// const dog = new Dog({ name: "dog" });
// // console.log(dog.__proto__ === Dog.prototype);
// console.log(Dog.__proto__ === Function.prototype);
// console.log(Object.__proto__)

// const obj = {
//   name: 'Maria',
//   greet: function () {
//     setTimeout(function () {
//       console.log(this.name)
//     }, 1000)
//   }
// }
// obj.greet()

// function Person(name) {
//   this.name = name;
// }

// Person.prototype.greet = function () {
//   return `Hi, I'm ${this.name}`
// }

// const ted = new Person("ted")
// console.log(ted.greet())

class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hi, I'm ${this.name}`
  }
}

const ted = Person()