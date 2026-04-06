const form = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

function showError(fieldId, message) {
    const errorSpan = document.getElementById(fieldId + 'Error');
    const input = document.getElementById(fieldId);
    errorSpan.textContent = message;
    input.classList.add('input-error');
}

function clearError(fieldId) {
    const errorSpan = document.getElementById(fieldId + 'Error');
    const input = document.getElementById(fieldId);
    errorSpan.textContent = '';
    input.classList.remove('input-error');
}

function validateName() {
    const name = document.getElementById('name').value.trim();
    const nameRegex = /^[A-Za-zÀ-ÿ\s]+$/;
    if (name === '') {
        showError('name', 'O nome é obrigatório.');
        return false;
    }
    if (!nameRegex.test(name)) {
        showError('name', 'O nome deve conter apenas letras.');
        return false;
    }
    if (name.length < 3) {
        showError('name', 'O nome deve ter pelo menos 3 caracteres.');
        return false;
    }
    clearError('name');
    return true;
}

function validateEmail() {
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        showError('email', 'O email é obrigatório.');
        return false;
    }
    if (!emailRegex.test(email)) {
        showError('email', 'Informe um email válido.');
        return false;
    }
    clearError('email');
    return true;
}

function validatePhone() {
    const phone = document.getElementById('phone').value.trim();
    const phoneRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
    if (phone === '') {
        showError('phone', 'O telefone é obrigatório.');
        return false;
    }
    if (!phoneRegex.test(phone)) {
        showError('phone', 'Informe um telefone válido. Ex: (21) 99999-9999');
        return false;
    }
    clearError('phone');
    return true;
}

function validateMessage() {
    const message = document.getElementById('message').value.trim();
    if (message === '') {
        showError('message', 'A mensagem é obrigatória.');
        return false;
    }
    if (message.length < 10) {
        showError('message', 'A mensagem deve ter pelo menos 10 caracteres.');
        return false;
    }
    clearError('message');
    return true;
}

// Validação em tempo real
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);
document.getElementById('message').addEventListener('blur', validateMessage);

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    const isMessageValid = validateMessage();

    if (isNameValid && isEmailValid && isPhoneValid && isMessageValid) {
        form.style.display = 'none';
        successMessage.style.display = 'block';
        form.reset();
    }
});
