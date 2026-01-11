const profilebtn = document.querySelector('.header__profile');
const counter = document.querySelector('.main__counter');
const clickerBtn = document.querySelector('.main__clicker-cent');
const shopBtn = document.querySelector('.main__shop');

let count_money = 0;
const maxTilt = 60;

document.addEventListener('DOMContentLoaded', function(){
    const savedUser = localStorage.getItem('userData');

    if(!savedUser){
        window.location.href = 'registration.html';
    }

    loadCount();
});

profilebtn.addEventListener('click', function(){
    window.location.href = 'profile.html';
});

shopBtn.addEventListener('click', function(){
    window.location.href = 'shop.html';
});

clickerBtn.addEventListener('click', function(){
    count_money += 1;
    counter.textContent = count_money;
    tiltCoin(event);
    saveCount();
});

clickerBtn.addEventListener('mouseleave', resetCoin);

function tiltCoin(event) {
    const rect = clickerBtn.getBoundingClientRect();
    
    // Центр монетки
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Позиция курсора относительно центра
    const mouseX = event.clientX - centerX;
    const mouseY = event.clientY - centerY;
    
    // Рассчитываем углы наклона (ограничиваем максимальный наклон)
    const rotateY = (mouseX / rect.width) * maxTilt * 2;
    const rotateX = -(mouseY / rect.height) * maxTilt * 2;
    
    // Применяем трансформацию
    clickerBtn.style.transform = `
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
    `;

    setTimeout(() => {
        resetCoin();
}, 75);
}

function resetCoin() {
    clickerBtn.style.transform = 'rotateX(0) rotateY(0)';

}

function saveCount(){
    localStorage.setItem('savedCount', count_money);
}

function loadCount(){
    const savedCount = localStorage.getItem('savedCount');
    if(!savedCount){
        counter.textContent = '0';
    } else {
        count_money = parseInt(savedCount) || 0;
        counter.textContent = savedCount;
    }
}