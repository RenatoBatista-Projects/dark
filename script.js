const anoAtual = new Date().getFullYear();
const targetDate = new Date(anoAtual, 3, 24, 0, 0, 0); // Abril = mês 3

function updateCountdown() {
  const now = new Date();
  let diff = targetDate - now;

  if (diff <= 0) {
    document.getElementById("countdown").innerHTML = "<span>0d 0h 0m 0s</span>";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("countdown").innerHTML = "<span>" +
    days + "d " + hours + "h " + minutes + "m " + seconds + "s</span>";
}

setInterval(updateCountdown, 1000);
updateCountdown();
