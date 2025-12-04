// const base = prompt('Please enter the number');
// if (base) {
//   const result = Number(Math.pow(base, base));
//   console.log(result);
// } else {
//   console.log('Cancelled');
// }
// const max = 80;
// const min = 30;


// const colors = ['teal', 'tomato', 'orange', 'deeppink'];
// const max = colors.length - 1;
// const min = 0;

// const index = Math.round(Math.random() * (max - min) + min);
// const color = colors[index];
// console.log(color);
// document.body.style.backgroundColor = color;

// const firstName = 'qwe';
// const lastName = 'ert';
// console.log(firstName + ' ' + lastName);
// const type = 'VIP';
// const welcomeMsg = 'Guest ' + firstName
//   + ' ' + lastName + ' ' + 'lives in' + ' '
//   + type + ' ' + 'room';
// console.log(welcomeMsg);
// const quantity = 5;
// console.log(`This is room number ${quantity}.`);

// const blacklitedWord = 'samsung';
// const res = prompt('Please write the word');
// const normalizedRes = res.toLowerCase();
// console.log(normalizedRes);
// const slicedRes = res.slice(1).toLowerCase();
// console.log(slicedRes);
const blackListedWord = 'spam';
const str = 'This is SPAM';
console.log(str.toLowerCase().includes(blackListedWord));