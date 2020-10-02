function changeCity(event) {
  event.preventDefault();

  let cityInput = document.querySelector("#city-name");
  let cityLabel = document.querySelector("#currentCity");

  cityLabel.innerText = cityInput.value;
}

let button = document.querySelector("#form");
button.addEventListener("submit", changeCity);

let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let current = document.querySelector("#today");
current.innerText = day;

let hours = now.getHours();
let minutes = now.getMinutes();

let currentHour = document.querySelector("#hora");
currentHour.innerHTML = hours;

let currentMinute = document.querySelector("#minutos");
currentMinute.innerHTML = minutes;
