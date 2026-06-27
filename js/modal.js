const refs = {
    openModalBtn: document.querySelector('[data-action="open-modal"]'),
    closeModalBtn: document.querySelector('[data-action="close-modal"]'),
    backdrop:document.querySelector('.js-backdrop'), 
}


refs.openModalBtn.addEventListener('click', onOpenModalBtnClick);
refs.closeModalBtn.addEventListener('click', onCloseModalBtnClick);
refs.backdrop.addEventListener('click', onBackdropClick);

function onOpenModalBtnClick() {
    window.addEventListener('keydown', onEscKeyPress);
   document.body.classList.add('show-modal');
}

function onCloseModalBtnClick() {
    window.removeEventListener('keydown', onEscKeyPress);
    document.body.classList.remove('show-modal');
}

function onBackdropClick(e) {
    if (e.target === e.currentTarget) {
        onCloseModalBtnClick();
   }
   
}

function onEscKeyPress(e) {
    const ESC_KEY_CODE = 'Escape';
    const isEscKey = e.code === ESC_KEY_CODE;
    if (isEscKey) {
        onCloseModalBtnClick();
    }
}