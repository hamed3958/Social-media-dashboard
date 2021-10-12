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

//---------------number counter----------------------//

const counters = document.querySelectorAll('.value');
const speed = 100;

counters.forEach(counter => {
  const update = () => {
    const target = +counter.getAttribute('targetNum');
    const data = +counter.innerText;

    const time = target / speed;
    if (data < target) {
      counter.innerText = Math.ceil(data + time);
      setTimeout(update, 1);
    } else {
      counter.innerText = target;
    }

  }

  update();
});
