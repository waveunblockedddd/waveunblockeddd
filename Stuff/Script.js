document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('newUsername').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('newPassword').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    if (username === '' || email === '' || password === '') {
        showNotification('❌ All fields are required!', false);
        return;
    }

    if (!validateEmail(email)) {
        showNotification('❌ Invalid email address!', false);
        return;
    }

    if (password.length < 6) {
        showNotification('❌ Password must be at least 6 characters long!', false);
        return;
    }

    if (password !== confirmPassword) {
        showNotification('❌ Passwords do not match!', false);
        return;
    }

    
    showNotification('✅ Account Created Successfully! Redirecting...', true);
    setTimeout(() => {
        window.location.href = '?'; 
    }, 1500);
});


function generateUsername() {
    const adjectives = ['Wave', 'Blue', 'Ocean', 'Sea', 'Aqua', 'Splash', 'Tide', 'Surge', 'Neon', 'Glide'];
    const nouns = ['Rider', 'Surfer', 'Explorer', 'Seeker', 'Diver', 'Hunter', 'Hero', 'Flow', 'Guardian', 'Wizard'];

    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    const randomNumber = Math.floor(Math.random() * 1000);

    const randomUsername = `${randomAdjective}${randomNoun}${randomNumber}`;
    document.getElementById('newUsername').value = randomUsername;
    showNotification(`🎉 Username generated: ${randomUsername}`, true);
}


function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}


function showNotification(message, success) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.left = '50%';
    notification.style.transform = 'translateX(-50%)';
    notification.style.padding = '12px 20px';
    notification.style.borderRadius = '8px';
    notification.style.color = '#fff';
    notification.style.fontSize = '14px';
    notification.style.background = success ? '#4da6ff' : '#ff4d4d';
    notification.style.zIndex = '1000';
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 2500);
}