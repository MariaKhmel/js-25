const numbers = [1, 3, 5, 6, 7];

// console.log([9, 5, 3, 4, 5].reverse());

// function sortAsc(numbers) {
//   return numbers.sort(function (currentNum, nextNum) {
//     return currentNum - nextNum;
//   })
// }

// console.log(sortAsc(numbers));


const sortDesc = (numbers) => numbers.sort((a, b) => b - a);
console.log(sortDesc(numbers))