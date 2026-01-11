const inputNickname = document.querySelector('.registr__enter-section__nickname');
const inputID = document.querySelector('.registr__enter-section__id');
const inputTG = document.querySelector('.registr__enter-section__tg');
const errorMessage = document.querySelector('.registr__errors');
const enterBtn = document.querySelector('.registr__entrance');

const checkValue = () => {
    const valueNickname = inputNickname.value;
    const valueID = inputID.value;
    const valueTG = inputTG.value;

    const userData = {
        nickname: valueNickname,
        id: valueID,
        telegram: valueTG,
        lastSave: new Date().toISOString(),
    };
    errorMessage.textContent = "";

    if(!valueNickname || !valueID || !valueTG){
        errorMessage.textContent = "Введите все значения";
    } else if(!valueTG.startsWith('@')){
        errorMessage.textContent = "TG должен начинаться с @";
    } else {
        localStorage.setItem('userData', JSON.stringify(userData));
        window.location.href = 'clicker.html';
    }
}


enterBtn.addEventListener('click', checkValue);