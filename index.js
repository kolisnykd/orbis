const greetingEl = document.querySelector('.time');
const hour = new Date().getHours();
if (hour < 12) {
  greetingEl.textContent = "Доброго ранку! Завітайте на сніданок у Orbis.";
} else if (hour < 18) {
  greetingEl.textContent = "Гарного дня! Спробуйте наші бізнес-ланчі.";
} else {
  greetingEl.textContent = "Чудового вечора! У нас ідеальна вечеря.";
}

const dishitemS = document.querySelectorAll('.dish-item');
dishitemS.forEach((item) => {
  item.addEventListener('click', () => {
    window.location.href = 'menu.html';
  });
});


