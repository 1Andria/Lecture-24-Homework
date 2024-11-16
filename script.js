//დღეები
let days = parseInt(prompt("შეიყვანეთ დღე"));
while (isNaN(days) || days < 0) {
  days = prompt("გთხოვთ დღის მაჩვენებელში შეიყვანოთ რელევანტური რიცხვი.");
}

//საათები
let hours = parseInt(prompt("შეიყვანეთ საათი"));
while (isNaN(hours) || hours > 24 || hours < 0) {
  hours = prompt("გთხოვთ საათის მაჩვენებელში შეიყვანოთ რელევანტური რიცხვი.");
}
//წუთები
let minutes = parseInt(prompt("შეიყვანეთ წუთი"));
while (isNaN(minutes) || minutes > 60 || minutes < 0) {
  minutes = prompt("გთხოვთ წუთების მაჩვენებელში შეიყვანოთ რელევანტური რიცხვი.");
}

//წამები
let seconds = parseInt(prompt("შეიყვანეთ წამი"));
while (isNaN(seconds) || seconds > 60 || seconds < 0) {
  seconds = prompt("გთხოვთ წამების მაჩვენებელში შეიყვანოთ რელევანტური რიცხვი.");
}

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
