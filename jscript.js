// Функция открытия конверта
function openEnvelope() {
    const envelope = document.getElementById('envelope-container');
    const mainContent = document.getElementById('main-content');
    
    envelope.classList.add('envelope-hidden');
    mainContent.classList.remove('hidden');
    
    // Удаляем конверт из DOM после окончания анимации
    setTimeout(() => {
        envelope.style.display = 'none';
    }, 800);
}

// Логика Таймера обратного отсчета
const weddingDate = new Date("July 25, 2026 16:00:00").getTime();

const timerInterval = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if (distance < 0) {
        clearInterval(timerInterval);
        document.getElementById("countdown").innerHTML = "Ура! Этот день настал!";
    }
}, 1000);