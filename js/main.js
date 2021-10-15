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

document.addEventListener('readystatechange', event => {
  if (event.target.readyState === "complete") {
    setTimeout(() => {
      const counters = document.querySelectorAll('.value');

      counters.forEach(counter => {
        const update = () => {
          const target = +counter.getAttribute('targetNum');
          var x = () => {
            let startTimestamp = null;
            const step = (timestamp) => {
              if (!startTimestamp) startTimestamp = timestamp;
              const progress = Math.min((timestamp - startTimestamp) / 2000, 1);
              counter.innerHTML = Math.floor(progress * target);
              if (progress < 1) {
                window.requestAnimationFrame(step);
              }
            };
            window.requestAnimationFrame(step);
          }
          x();
        }
        update();
      });
    }, 1000)
  }
});
