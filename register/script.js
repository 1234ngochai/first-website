function validateInput(input){
  const { validity, name } = input;

  if (validity.valueMissing)
    return `${name} is required.`;
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
