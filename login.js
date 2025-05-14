const loginb = document.querySelector('#login-b');
const emailInputl = document.querySelector('#login-email');
const passwordInputl = document.querySelector('#login-password');
loginb.addEventListener('click', function(e) {
  e.preventDefault(); 
  if (!emailInputl.value) {
    alert('Будь ласка, заповніть поле пошти!');
  } else if (!passwordInputl.value){
    alert('Будь ласка, заповніть поле паролю!');
  } else {
    alert('Успішний вхід!');
  }
});
const regb = document.querySelector('#reg-b');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmpasswordInput = document.querySelector('#confirm-password');
const errormsg = document.querySelector('.error-msg');
regb.addEventListener('click', function(e) {
  e.preventDefault();
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value;
  const confirmPassword = confirmpasswordInput.value;
  const nameRegex = /^[А-Яа-яЇїІіЄєҐґA-Za-z\s]+$/;
  const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  const passwordLength = password.length >= 12;
  const hasUpperCase = /[A-ZА-ЯІЇЄҐ]/.test(password);
  const hasDigit = /\d/.test(password);
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
  if (!password) {
    alert('Будь ласка, заповніть поле паролю!');
    return;
  } else if (!passwordLength) {
	errormsg.textContent = 'Пароль має містити щонайменше 12 символів!';
    return;
  } else if (!hasUpperCase) {
	errormsg.textContent = 'Пароль має містити хоча б одну велику літеру!';
    return;
  } else if (!hasDigit) {
	errormsg.textContent = 'Пароль має містити хоча б одну цифру!';
    return;
  }
  if (!confirmPassword) {
    alert('Будь ласка, заповніть підтвердження паролю!');
    return;
  } else if (password !== confirmPassword) {
	errormsg.textContent = 'Пароль і підтвердження паролю не збігаються!';
    return;
  }
  if (confirm("Ви дійсно хочете зареєструватись?")) {
	errormsg.textContent = '';
    alert("Успішна реєстрація!");
	}
});

