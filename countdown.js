const launchDate = new Date("2025-05-25T04:00:00");
const countdownOverlay = document.getElementById("countdown-overlay");


const updateCountdown = () => {
  const now = new Date();
  const timeLeft = launchDate - now;

  if (timeLeft >= 0 && window.location.pathname !== "/index.html") {
    window.location.href = "/index.html";
    countdownOverlay.classList.add("show");
    return;
  }

  if (timeLeft <= 0) {
    countdownOverlay.classList.add("hide");
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  document.getElementById("days").textContent = String(days).padStart(2, '0');
  document.getElementById("hours").textContent = String(hours).padStart(2, '0');
  document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
  document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
};

updateCountdown();
setInterval(updateCountdown, 1000);
