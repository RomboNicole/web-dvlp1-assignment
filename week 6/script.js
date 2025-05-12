// Event Handling
document.getElementById('changeBtn').addEventListener('click', () => {
    document.getElementById('changeBtn').textContent = "Clicked!";
    document.getElementById('changeBtn').style.backgroundColor = "#2ecc71";
  });
  
  document.getElementById('hoverText').addEventListener('mouseover', () => {
    document.getElementById('hoverText').textContent = "You're hovering!";
  });
  
  document.getElementById('keyInput').addEventListener('keypress', (e) => {
    console.log(`Key pressed: ${e.key}`);
  });
  
  // Secret Action
  document.getElementById('secretBtn').addEventListener('dblclick', () => {
    alert("🎉 Secret Unlocked!");
  });
  
  // Tab Interaction
  const tabs = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.tab-content');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      contents.forEach(c => c.classList.remove('active'));
      document.getElementById(tab.dataset.target).classList.add('active');
    });
  });
  
  // Form Validation
  const form = document.getElementById('signupForm');
  const emailField = document.getElementById('email');
  const passwordField = document.getElementById('password');
  const feedback = document.getElementById('formFeedback');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailField.value;
    const password = passwordField.value;
  
    if (!email.includes('@')) {
      feedback.textContent = "Please enter a valid email.";
      return;
    }
  
    if (password.length < 8) {
      feedback.textContent = "Password must be at least 8 characters.";
      return;
    }
  
    feedback.style.color = "green";
    feedback.textContent = "Form submitted successfully!";
  });
  
  // Real-time feedback
  passwordField.addEventListener('input', () => {
    if (passwordField.value.length < 8) {
      feedback.textContent = "Weak password";
      feedback.style.color = "red";
    } else {
      feedback.textContent = "Strong password";
      feedback.style.color = "green";
    }
  });
  