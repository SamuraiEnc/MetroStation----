const inputNickname = document.querySelector('.registr__enter-section__nickname');
const inputID = document.querySelector('.registr__enter-section__id');
const inputTG = document.querySelector('.registr__enter-section__tg');
const errorMessage = document.querySelector('.registr__errors');
const enterBtn = document.querySelector('.registr__entrance');

const checkTG =() => {
    const valueTG = inputTG.value;
    if(!valueTG.startsWith('@')){
        errorMessage.textContent = "TG должен начинаться с @";
    }
}

const checkValue = () => {
    const valueNickname = inputNickname.value;
    const valueID = inputID.value;
    const valueTG = inputTG.value;


    errorMessage.textContent = "";

    if(!valueNickname || !valueID || !valueTG){
        errorMessage.textContent = "Введите все значения";
    }
    checkTG();
}


enterBtn.addEventListener('click', checkValue);