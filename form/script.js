const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const mainBtn = document.querySelector('.main-btn');
const closeIcon = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
}); 

mainBtn.addEventListener('click', () => {
    wrapper.classList.add('active-main');
});     

closeIcon.addEventListener('click', () => {
    wrapper.classList.remove('active-main');
});     


// sign up data store 

const registerForm = document.getElementById('registerForm');
const users = JSON.parse(localStorage.getItem('users')) || [];

registerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    register();
});

function register() {
    const regUser = document.getElementById('username').value;
    const regEmail = document.getElementById('email').value;
    const regPassword = document.getElementById('password').value;

    if (!regUser || !regEmail || !regPassword) {
        alert('Please fill in all fields.');
        return;
    }

    let userExists = false;
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === regEmail) {
            userExists = true;
            break;
        }
    }

    if (userExists) {
        alert('User already exists. Please use a different email.');
        return;
    }

    const newUser = {
        username: regUser,
        email: regEmail,
        password: regPassword
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    alert('User registered successfully!');
    document.getElementById('registerForm').reset();
}

// login function

const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    login();
});

function login() {
    const loginEmail = document.getElementById('loginEmail').value;
    const loginPassword = document.getElementById('loginPassword').value;

    let userFound = false;
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === loginEmail && users[i].password === loginPassword) {
            userFound = true;
            break;
        }
    }

    if (userFound) {
        alert('Login successful!');
        // Redirect or perform actions after successful login
    } else {
        alert('Invalid credentials. Please try again.');
    }

    document.getElementById('loginForm').reset();
}
