const animateBtn = document.getElementById('animateBtn');
const colorPicker = document.getElementById('colorPicker');

// Load saved color from localStorage
window.onload = () => {
  const savedColor = localStorage.getItem('favColor');
  if (savedColor) {
    document.body.style.backgroundColor = savedColor;
    colorPicker.value = savedColor;
  }
};

// Save color and update background
colorPicker.addEventListener('input', () => {
  const color = colorPicker.value;
  localStorage.setItem('favColor', color);
  document.body.style.backgroundColor = color;
});

// Trigger animation on button click
animateBtn.addEventListener('click', () => {
  animateBtn.classList.add('animate');

  // Remove the class after animation ends to allow re-trigger
  setTimeout(() => {
    animateBtn.classList.remove('animate');
  }, 500);
});
