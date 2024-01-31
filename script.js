function validateLoginForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username.trim() === '' || password.trim() === '') {
        alert("Username or password cannot be empty!");
        return false; // Prevent form submission
    }
    return true;
    
    
}

function togglePasswordVisibility() {
    var passwordInput = document.getElementById('password');
    var eyeIcon = document.getElementById('eye-icon');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.classList.remove('visible');
        eyeIcon.classList.add('hidden');
    } else {
        passwordInput.type='password';
        eyeIcon.classList.remove('hidden');
        eyeIcon.classList.add('visible');
    }
}


function showSignUpModal() {
    var signUpModal = document.getElementById('signup-modal');
    signUpModal.style.display = 'block';
}

function closeSignUpModal() {
    window.location.href = '/index.html';
}

function validateForm() {
    var password = document.getElementById('signup-password').value;
    var confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return false;
    }

    // Continue with the form submission if passwords match
    return true;
}


//toggle menu
function toggleMenu() {
    var nav = document.querySelector('nav');
    nav.classList.toggle('active');
  }