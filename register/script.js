function validateInput(input) {
  const { validity, name } = input;
  const repeat = input.getAttribute("repeat");
  if (validity.valueMissing)
    return `${name} is required.`;
  if (name === "password" && validity.patternMismatch)
    return `Password requirements:
            - At least 8 characters
            - At least 1 uppercase letter (A–Z)
            - At least 1 digit (0–9), and the password must not start with a digit
            - At least 1 special character: ~ ! @ # $ % ^ & * ( ) _ + - = [ ] { } \\ | ; : ' " , . / < > ?`;
  if (name === "email" && validity.patternMismatch)
    return `Email requirements:
            - Format: [aaa]@[bbb].[ccc]
            - [aaa]: at least 3 characters; only letters, digits, _ . +
            - [bbb]: at least 3 letters (A–Z); no digits or special characters
            - [ccc]: at least 2 letters (A–Z); no digits or special characters`;
  console.log(repeat, name)
  if (repeat === name) {
    console.log(name)
    const inputs = document.querySelectorAll(`input[repeat="${repeat}"]`);
    let error = false;
    let original_name;
    inputs.forEach(i => {
      if (i.value !== input.value) {
        error = true;
        original_name = i.name;
      }});
    if (error) {
      return `${repeat} must match ${original_name}.
            - Enter the same ${original_name} in both fields.`
    }
  }


  if (validity.typeMismatch)
    return `Enter a valid ${name}.`;
  return '';
}

function applyErrorMessage(input, message) {
  const errorElement = input.nextElementSibling;

  if (!errorElement) {
    return true;
  }

  const isOK = !message;
  errorElement.classList.toggle("show", !!message);
  errorElement.textContent = message;

  return isOK;
}

async function signUp(evt) {
  evt.preventDefault();

  const inputs = evt.currentTarget.querySelectorAll("input:not([type=hidden])");
  let isValid = true;

  inputs.forEach((input) => {
    const message = validateInput(input);
    const isOK = applyErrorMessage(input, message);

    if (!isOK) {
      isValid = isOK;
    }
  });

  if (!isValid) {
    return;
  }

  const formData = new FormData(evt.currentTarget);
  const user = {};
  formData.forEach((value, key) => {
    user[key] = value;
  })

  const api = 'https://api.realworld.show/api/users';
  const userResp = await fetch(api, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user })
  });
  const user_data = await userResp.json();

  if (userResp.ok === true) {
    localStorage.setItem('authToken', user_data.user.token);
    localStorage.setItem('username', user_data.user.token);
    location.href = '/';
  }
}

const register_form = document.querySelector("#register_form");
register_form.addEventListener("submit", signUp);
