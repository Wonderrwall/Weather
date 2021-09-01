let now = new Date();
console.log(now);
let date = now.getDate();
console.log(date);
let milliseconds = now.getMilliseconds();
console.log(milliseconds);
let year = now.getFullYear();
console.log(year);

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
console.log(day);
let months = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];
let dates = null;
console.log(month);
let h2 = document.querySelector("h2");
h2.innerHTML = `Today is ${day}, ${month} ${date}, ${year}`;
function formatDate() {
  return `${day}, ${month} ${date}, ${year}`;
}
let apiKey = "b41a4d1add1c04ba5f687564d9b88a3c";

console.log(formatDate());
function showPassword(event) {
  event.preventDefault();
  let cityinput = document.querySelector("#city-sun");
  let h3 = document.querySelector("h3");
  h3.innerHTML = `${cityinput.value}`;
  let apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityinput.value +
    "&units=metric";
  console.log(temperature);
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}
let newcity = document.querySelector("#newcity");
newcity.addEventListener("submit", showPassword);

function showTemperature(response) {
  console.log(response);
  let temperature = Math.round(response.data.main.temp);
  console.log(temperature);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = `${temperature}°C`;
}
