const reserv = document.querySelector('#reserv');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const errormsg = document.querySelector('.error-msg');
reserv.addEventListener('click', function(e) {
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
if (confirm("Ви дійсно хочете забронювати стіл?")) {
	errormsg.textContent = '';
    alert("Стіл успішно заброньовано!");
	} 
});

