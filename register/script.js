async function sign_up(e) {
    e.preventDefault();
    const username = document.getElementById("register_username").value;
    const email = document.getElementById("register_email").value;
    const password = document.getElementById("register_password").value;

    const api = 'https://api.realworld.show/api/users';
    const user = await fetch(api, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user: { username, email, password } })
    });
    const user_data = await user.json();
    if (user.ok === true){
        localStorage.setItem('authToken', user_data.user.token);
        location.href = 'http://localhost:5173/';
        
    }
}


const register_submit_btn = document.getElementById("register_submit_btn");
register_submit_btn.addEventListener("click", sign_up);