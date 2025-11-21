const days = document.getElementById("days");
const mins = document.getElementById("mins");
const hours = document.getElementById("hours");
const secs = document.getElementById("secs");
const offer = document.getElementById("offer");

const format = (time) => {
  return time < 10 ? `0${time}` : time;
};

const updateCount = (deadline, id) => {
  let currentDate = new Date();
  let difference = deadline - currentDate;

  let calSec = Math.floor(difference / 1000) % 60;
  let calMin = Math.floor(difference / 1000 / 60) % 60;
  let calHour = Math.floor(difference / 1000 / 60 / 60) % 24;
  let calDay = Math.floor(difference / 1000 / 60 / 60 / 24);

  days.textContent = format(calDay);
  hours.textContent = format(calHour);
  mins.textContent = format(calMin);
  secs.textContent = format(calSec);

  if (difference <= 0) {
    clearInterval(id);
    days.textContent =
      hours.textContent =
      mins.textContent =
      secs.textContent =
        `00`;
    offer.classList.remove("show");
    offer.innerHTML = "Offer is completed 🎉🎉";
  }
};

const countDown = (targetDate) => {
  const intervalId = setInterval(() => {
    updateCount(targetDate, intervalId);
  }, 1000);
};

let targetDate = new Date("December 05 2025  11:55:00"); // deadline
countDown(targetDate);
