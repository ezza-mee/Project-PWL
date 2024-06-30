function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

function toggleForm(formId) {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    
    if (formId === 'login-form') {
        loginForm.classList.add('active');
        registerForm.classList.remove('active');
    } else if (formId === 'register-form') {
        registerForm.classList.add('active');
        loginForm.classList.remove('active');
    }
}

function toggleForm(formId) {
    document.getElementById('login-form').classList.remove('active');
    document.getElementById('register-form').classList.remove('active');
    document.getElementById(formId).classList.add('active');
}