async function sign_up(e) {
    e.preventDefault();
    // const form = e.currentTarget;
    // const { username, email, password } = Object.fromEntries(new FormData(form));

    const username = document.getElementById("register_username").value;
    const email = document.getElementById("register_email").value;
    const password = document.getElementById("register_password").value;

    const email_input = document.getElementById("register_email");
    const username_input = document.getElementById("register_username");
    const password_input = document.getElementById("register_password");

    const email_error_message = validity_message(email_input,email_input.name);
    const username_error_message = validity_message(username_input,username_input.name);
    const password_error_message = validity_message(password_input,password_input.name);


    const email_error = document.getElementById("register_email_error");
    const username_error = document.getElementById("register_username_error");
    const password_error = document.getElementById("register_password_error");


    const okEmail    = apply_error_message(email_error_message,    email_error);
    const okUsername = apply_error_message(username_error_message, username_error);
    const okPassword = apply_error_message(password_error_message, password_error);

    const is_valid = okEmail && okUsername && okPassword;
    if (!is_valid) return;

    const api = 'https://api.realworld.show/api/users';
    const user = await fetch(api, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user: { username, email, password } })
    });
    const user_data = await user.json();
    if (user.ok === true){
        localStorage.setItem('authToken', user_data.user.token);
        localStorage.setItem('username', user_data.user.token);
        location.href = 'http://localhost:5173/';
        
    }
}


function validity_message(input, type){
  const email = input.validity;
  if (email.valueMissing)    
    return `${type} is required.`;
  if (email.typeMismatch)    
    return `Enter a valid ${type}.`;
  return '';
}

function apply_error_message(message, error_element){
    if (message){
        error_element.textContent = message;
        error_element.classList.add('show');
        return false
    }
    else{
        error_element.textContent  = message
        error_element.classList.remove("show");
        return true
    }
}

const register_submit_btn = document.getElementById("register_submit_btn");
register_submit_btn.addEventListener("click", sign_up);