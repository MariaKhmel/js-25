
// const targetBtn = document.querySelector(".js-target-btn");
// const addListenerBtn = document.querySelector(".js-add-listener");
// const removeListenerBtn = document.querySelector(".js-remove-listener");


// addListenerBtn.addEventListener("click", event=>{
//   console.log("adding listener");
//   targetBtn.addEventListener("click", onTargetBtnClick)
// })

// removeListenerBtn.addEventListener("click" , function (event){
//     console.log("remove event listener");
//     targetBtn.removeEventListener("click", onTargetBtnClick);
// })


// function onTargetBtnClick(){
//     console.log("on taget click");
// }

// const form = document.querySelector(".js-register-form");
// form.addEventListener("submit", onFromSubmit);

// function onFromSubmit(event) {
//     event.preventDefault();

//     // const formData = new FormData(event.currentTarget);
//     // console.log(formData);
//     // formData.forEach((value, name) => {
//     //     console.log(name);
//     //     console.log(value);
//     // })

// //     console.log(event.currentTarget.email.value);
// }

// const refs = {
//     input: document.querySelector(".js-input"),
//     nameLabel: document.querySelector(".js-button > span"),
//     licenseCheckox: document.querySelector(".js-license"),
//     btn:document.querySelector(".js-button"),
// }

// refs.input.addEventListener("input", onInputChange);
// refs.licenseCheckox.addEventListener("change", onLicenseChange);

// function onInputChange(e) {
//     refs.nameLabel.textContent = e.currentTarget.value;
// }

// function onLicenseChange(e) {
//     console.log(e.currentTarget.checked);
//     refs.btn.disabled = !e.currentTarget.checked;
// }

// const refs = {
//     output: document.querySelector(".js-output"),
//     clearBtn:document.querySelector(".js-clear"),
// }

// window.addEventListener("keydown", onKeyDown);
// refs.clearBtn.addEventListener('click', onClearOutput)


// function onKeyDown(e) {
//     console.log(e);
//     refs.output.textContent += e.key;
// }

// function onClearOutput(e) {
//     refs.output.textContent = "";
// }

// const boxRef = document.querySelector(".js-box");

// boxRef.addEventListener("mouseover", onMouseEneter);
// boxRef.addEventListener("mouseout", onMouseLeave);
// boxRef.addEventListener("mousemove", onMouseMove);

// function onMouseEneter(e) {
//     console.log(e);
//     const box = e.currentTarget;
//     box.classList.add("box--active")
// }

// function onMouseLeave(e) {
//     const box = e.currentTarget;
//     box.classList.remove("box--active");
// }

// function onMouseMove(e) {
//     console.log(e.target);
// }

const refs = {
    openModalBtn:document.querySelector('[data-action="open-modal"]'),
    closeModalBtn:document.querySelector('[data-action="close-modal"]'),
    backdrop:document.querySelector(".js-backdrop"),
}

refs.openModalBtn.addEventListener("click", onOpenModal);
refs.closeModalBtn.addEventListener("click", onCloseModal);
refs.backdrop.addEventListener("click", onBackdropClick);


function onOpenModal(e) {
    window.addEventListener("keydown", onEscKeypress);
    document.body.classList.add("show-modal");
}

function onCloseModal(e) {
    window.removeEventListener("keydown", onEscKeypress);
    document.body.classList.remove("show-modal")
    
}


function onBackdropClick(e) {
    if (e.target === e.currentTarget) {
        console.log('clicked backdrop');
        onCloseModal();
    }
    
}

function onEscKeypress(e) {
    const ESC_KEY_CODE = "Escape";
    const isEscKey = e.code === ESC_KEY_CODE;

    if (isEscKey) {
        onCloseModal();
    }
}
