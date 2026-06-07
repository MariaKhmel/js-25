
const targetBtn = document.querySelector(".js-target-btn");
const addListenerBtn = document.querySelector(".js-add-listener");
const removeListenerBtn = document.querySelector(".js-remove-listener");

addListenerBtn.addEventListener("click", event=>{
  console.log("adding listener");
  targetBtn.addEventListener("clicl")
})

function onTargetBtnClick(){
    console.log("on taget click");
}