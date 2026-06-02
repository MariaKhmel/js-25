import products from "../data/products.js";
import transactionhistory from "../data/transactions.js";

const currentPageUrl = "/contact";

const linkEl = document.querySelector(`.site-nav__link[href="${currentPageUrl}"]`);

// console.log(linkEl);

linkEl.classList.add("site-nav__link--current");


// const navEl = document.querySelector(".site-nav");
// const firstNavItemEl = navEl.querySelector(".site-nav__item");
// console.log(firstNavItemEl)

// const firstNavItemEl = navEl.firstElementChild;
// console.log(firstNavItemEl);
// console.log(navEl.children);
// console.log(navEl.lastElementChild);

// const imageEl = document.createElement("img");
// imageEl.src = "https://picsum.photos/320/240";
// imageEl.alt = "picture-x";
// imageEl.width = 241;

// const titleEl = document.createElement("h1");
// titleEl.textContent = "page h1";

// // document.body.appendChild(imageEl);

// const heroEl = document.querySelector(".hero");
// // heroEl.appendChild(imageEl);
// heroEl.append(titleEl, imageEl);

// const navItemEl = document.createElement("li");
// navItemEl.classList.add("site-item__item");

// const navLinkEl = document.createElement("a");
// navItemEl.classList.add("site-nav__link");
// navLinkEl.textContent = "navlink text content";
// navLinkEl.href = "/profile";

// navItemEl.appendChild(navLinkEl);

// const navEl = document.querySelector(".site-nav");
// navEl.appendChild(navItemEl);

// navEl.insertBefore(navItemEl, navEl.firstElementChild)

const colorPickerOptions = [
    { label: 'red', color: '#F44336' },
    { label: 'green', color: '#4CAF50' },
    { label: 'blue', color: '#2196F3' },
    { label: 'grey', color: '#607D8B' },
    { label: 'pink', color: '#E91E63' },
    { label: 'indigo', color: '#3F51B5' },
];


const colorPickerContainerEl = document.querySelector(".js-color-picker");

// const elements = colorPickerOptions.map(option => {
//     const buttonEl = document.createElement("button");
//     buttonEl.type = "button";
//     buttonEl.classList.add("color-picker__option");
//     buttonEl.textContent = option.label;
//     buttonEl.style.background = option.color;

//     return buttonEl;
// })


// console.log(elements)

const makeColorPickerOptions = (options) => {
    return options.map(option => {
        const buttonEl = document.createElement("button");
        buttonEl.type = "button";
        buttonEl.classList.add("color-picker__option");
        buttonEl.textContent = option.label;
        buttonEl.style.background = option.color;

        return buttonEl;   
    })
}

// const elements = makeColorPickerOptions(colorPickerOptions);
// colorPickerContainerEl.append(...elements);

///products

// const productsContainerEl = document.querySelector(".js-products");

// const makeProductsCard = ({ name, description, price }) => {
    
//     const productEl = document.createElement("article");
//     productEl.classList.add("product");

//     const nameEl = document.createElement("h2");
//     nameEl.textContent = name;
//     nameEl.classList.add("product__name");

//     const descrEl = document.createElement("p");
//     descrEl.textContent = description;
//     descrEl.classList.add("product__descr");

//     const priceEl = document.createElement("p");
//     priceEl.textContent = `price: ${price}`;
//     priceEl.classList.add("product__price");

//     productEl.append(nameEl, descrEl, priceEl);

//     return productEl;
    
// }

// const elements = products.map(makeProductsCard);
// console.log(elements);
// productsContainerEl.append(...elements)

// const titleEl = document.querySelector(".title");
// // titleEl.innerHTML = `<a href="" this is link:) </a>`;

// titleEl.insertAdjacentHTML("beforeend", 
//     `<a href="" this is link:) </a>`
// )


const makeTransactionTableRowMarkup = transaction => {
    const { id, amount, date, business, type, name, account } = transaction;

    return `
    <tr>
  <td> ${id} </td>
  <td> ${amount} </td>
  <td> ${date} </td>
 <td> ${business} </td>
   <td> ${type} </td>
   <td> ${name} </td>
   <td> ${account} </td>
    </tr>
    `
}

const tableEl = document.querySelector(".js-transactions-table");
const transactionTableRowMarkup = transactionhistory
    .map(makeTransactionTableRowMarkup).join('');

tableEl.insertAdjacentHTML("beforeend", transactionTableRowMarkup)
console.log(transactionTableRowMarkup)