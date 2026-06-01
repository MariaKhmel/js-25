const magicBtn = document.querySelector(".js-magic-btn");

const imageEl = document.querySelector(".hero__image");

imageEl.src = "https://picsum.photos/320/240";
imageEl.alt = "new";

const heroTitleEl = document.querySelector(".hero__title");
heroTitleEl.textContent = "upDATE";

console.log(imageEl.getAttribute("src"));
console.log(imageEl.src);
console.log(imageEl.hasAttribute("src"));

const actions = document.querySelectorAll(".js-actions button");

console.log(actions);
console.log(actions[2])