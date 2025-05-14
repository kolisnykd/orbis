const selectedDishes = [];
document.querySelectorAll('.menu-content').forEach(dish => {
	dish.addEventListener('click', () => {
		const dishName = dish.textContent.trim();
		if (dish.classList.contains('selected')) {
			dish.classList.remove('selected');
			const index = selectedDishes.indexOf(dishName);
			if (index > -1) selectedDishes.splice(index, 1);
		} else {
			dish.classList.add('selected');
			selectedDishes.push(dishName);
		}
	});
});
const order = document.querySelector('#order');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const errormsg = document.querySelector('.error-msg');
order.addEventListener('click', function(e) {
  e.preventDefault();
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value;
  const nameRegex = /^[А-Яа-яЇїІіЄєҐґA-Za-z\s]+$/;
  const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!name) {
    alert('Будь ласка, заповніть поле імені!');
    return;
  } else if (!nameRegex.test(name)) {
	errormsg.textContent = 'Ім’я може містити лише літери!';
    return;
  }
  if (!email) {
    alert('Будь ласка, заповніть поле пошти!');
    return;
  } else if (!emailRegex.test(email)) {
	errormsg.textContent = 'Некоректний формат електронної пошти!';
    return;
  }
  if (!phone) {
    alert('Будь ласка, заповніть поле телефону!');
    return;
  } 
  if (!selectedDishes) {
    alert('Будь ласка, оберіть страви!');
    return;
  } 
  if (confirm("Ви дійсно хочете оформити замовлення? Обрані страви: " + selectedDishes.join(", "))) {
	errormsg.textContent = '';
	alert("Замовлення прийняте!");
	}
});