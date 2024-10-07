document.getElementById('registrationForm').addEventListener('submit', function (event) {
  event.preventDefault();
  let errors = [];
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const age = document.getElementById('age').value.trim();

  // Validate Name
  if (name.length < 3) {
      errors.push('Name must be at least 3 characters long.');
  }

  // Validate Email
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
      errors.push('Please enter a valid email address.');
  }

  // Validate Password (minimum length, upper and lowercase letters, numbers, special characters)
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
  
  if (password.length < 6) {
      errors.push('Password must be at least 6 characters long.');
  } else if (!passwordPattern.test(password)) {
      errors.push('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
  }

  // Validate Age
  if (age < 18 || age > 100) {
      errors.push('Age must be between 18 and 100.');
  }

  // Display Errors or Success Message
  const messageDiv = document.getElementById('message');
  if (errors.length > 0) {
      messageDiv.innerHTML = `<p class="error">${errors.join('<br>')}</p>`;
  } else {
      messageDiv.innerHTML = '<p class="success">Form submitted successfully!</p>';
  }
});
