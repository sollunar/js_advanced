"use-strict";
const timer = {
    seconds: document.querySelector(".seconds"),
    minutes: document.querySelector(".minutes"),
    hours: document.querySelector(".hours"),
    days: document.querySelector(".days"),
    months: document.querySelector(".months"),
};

function newYearCountDown() {
    const currentYear = new Date().getFullYear();
    const currentTime = new Date();
    const lastDay = new Date(currentYear, 11, 31);
    const differenceInSeconds = (lastDay - currentTime) / 1000;
    const secondsLeft = Math.floor(differenceInSeconds % 60);
    const minutesLeft = Math.floor((differenceInSeconds / 60) % 60);
    const hoursLeft = Math.floor((differenceInSeconds / 3600) % 24);
    const daysLeft = Math.floor(differenceInSeconds / 3600 / 24 / 12);
    const monthLeft = Math.floor(differenceInSeconds / 3600 / 60 / 12);
    timer.seconds.innerHTML = secondsLeft;
    timer.minutes.innerHTML = minutesLeft;
    timer.hours.innerHTML = hoursLeft;
    timer.days.innerHTML = daysLeft;
    timer.months.innerHTML = monthLeft;
}

newYearCountDown();
setInterval(newYearCountDown, 1000);
