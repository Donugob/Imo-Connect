document.getElementById("subscribeForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const message = document.getElementById("message");

  if (email) {
    message.innerHTML = `<span class="text-success">Thanks for subscribing!</span>`;
    document.getElementById("email").value = "";
  } else {
    message.innerHTML = `<span class="text-danger">Please enter a valid email!</span>`;
  }
});

// Countdown Timer
const targetDate = new Date("2024-12-31T23:59:59").getTime();
const countdown = () => {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
};

setInterval(countdown, 1000);