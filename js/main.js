"use strict"

const toggle = document.getElementById('toggle');
const body = document.querySelector('body');
const currentTheme = localStorage.getItem("theme");

if (currentTheme == "dark") {
  toggle.classList.add('active');
  body.classList.add("active");
}

toggle.onclick = function () {
  toggle.classList.toggle('active');
  body.classList.toggle('active');

  let theme = "light";
  if (body.classList.contains('active')) {
    theme = "dark";
  }

  localStorage.setItem("theme", theme);
}
