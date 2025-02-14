document.addEventListener("DOMContentLoaded", function() {
    let countdownElement = document.getElementById("countdown");
    let envelope = document.getElementById("envelope");
    let timeLeft =  2 * 60 * 60; // 10 días en segundos

    function updateCountdown() {
        let hours = Math.floor((timeLeft % (2 * 60 * 60)) / (60 * 60));
        let minutes = Math.floor((timeLeft % (60 * 60)) / 60);
        let seconds = timeLeft % 60;

        countdownElement.textContent = ` ${hours}h ${minutes}m ${seconds}s`;

        if (timeLeft <= 0) {
            clearInterval(countdown);
            countdownElement.style.display = "none";
            envelope.classList.add("open");
        } else {
            timeLeft--;
        }
    }

    updateCountdown(); // Llamar inmediatamente para evitar el primer segundo vacío
    let countdown = setInterval(updateCountdown, 1000); // Actualizar cada 1 segundo
});
