let days = parseInt(prompt("შეიყვანეთ დღე"));
let hours = parseInt(prompt("შეიყვანეთ საათი"));
let minutes = parseInt(prompt("შეიყვანეთ წუთი"));
let seconds = parseInt(prompt("შეიყვანეთ წამი"));

let day = document.getElementById("day");
let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");

day.textContent = days;
hour.textContent = hours;
minute.textContent = minutes;
second.textContent = seconds;

let Interval = setInterval(() => {
  if (seconds > 0) {
    seconds--;
  } else if (seconds == 0 && minutes > 0) {
    minutes--;
    seconds = 59;
  } else if (seconds == 0 && minutes == 0 && hours > 0) {
    hours--;
    seconds = 59;
    minutes = 59;
  } else if (seconds == 0 && minutes == 0 && hours == 0 && days > 0) {
    days--;
    seconds = 59;
    minutes = 59;
    hours = 23;
  } else {
    clearInterval(Interval);
  }
  second.textContent = seconds;
  minute.textContent = minutes;
  hour.textContent = hours;
  day.textContent = days;
}, 1000);

// let MinuteInterval = setInterval(() => {
//   if (minutes > 0) {
//     minutes--;
//     minute.textContent = minutes;
//   } else {
//     clearInterval(MinuteInterval);
//   }
// }, 60000);

// let HourInterval = setInterval(() => {
//   if (hours > 0) {
//     hours--;
//     hour.textContent = hours;
//   } else {
//     clearInterval(HourInterval);
//   }
// }, 3600000);

// let DayInterval = setInterval(() => {
//   if (days > 0) {
//     days--;
//     day.textContent = days;
//   } else {
//     clearInterval(DayInterval);
//   }
// }, 86400000);
