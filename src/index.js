let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let dd = days[now.getDay()];
let hh = now.getHours();
let mnt = now.getMinutes();

let date = document.querySelector("#today");
date.innerHTML = `Today is ${dd}, ${hh}:${mnt}`;
