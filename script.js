const form = document.getElementById('form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInput();
});

const checkInput = () => {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (
    firstNameValue === '' ||
    lastName.value === '' ||
    emailValue === '' ||
    passwordValue === ''
  ) {
    if (firstNameValue === '') {
      setError(firstName, 'First Name cannot be empty');
    } else {
      setSuccess(firstName);
    }

    if (lastNameValue === '') {
      setError(lastName, 'Last Name cannot be empty');
    } else {
      setSuccess(lastName);
    }

    if (emailValue === '') {
      setError(email, 'Looks like this is not an email');
    } else {
      setSuccess(email);
    }

    if (passwordValue === '') {
      setError(password, 'Password field cannot be empty');
    } else {
      setSuccess(password);
    }
  } else {
    location.reload();
  }
}

const setError = (input, message) => {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  small.innerText = message;
  formControl.className = 'form-control error';
  formControl.style.marginBottom = '1.5rem';
}

const setSuccess = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}
