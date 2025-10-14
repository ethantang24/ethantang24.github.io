// -------------------- Theme Toggle --------------------
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = getCookie('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);
themeToggle.textContent = currentTheme === 'dark' ? '☀️' : '🌙';

themeToggle.addEventListener('click', () => {
  const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  setCookie('theme', newTheme, 365);
  themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
});

// -------------------- Welcome Popup --------------------
const welcomePopup = document.getElementById('welcome-popup');
const enterBtn = document.getElementById('enter-btn');
if (!getCookie('visited')) {
  welcomePopup.style.display = 'flex';
}
enterBtn.addEventListener('click', () => {
  welcomePopup.style.display = 'none';
  setCookie('visited', 'true', 30);
});

// -------------------- Survey Popup --------------------
const surveyPopup = document.getElementById('survey-popup');
document.getElementById('close-popup').addEventListener('click', () => {
  surveyPopup.style.display = 'none';
  setCookie('surveyClosed', 'true', 7);
});
if (getCookie('surveyClosed')) {
  surveyPopup.style.display = 'none';
}

// -------------------- Cookies --------------------
function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + days*24*60*60*1000);
  document.cookie = `${name}=${value};expires=${d.toUTCString()};path=/`;
}
function getCookie(name) {
  const match = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return match ? match[2] : null;
}

// -------------------- Fluid Canvas Placeholder --------------------
// This just ensures canvas exists and doesn't block clicks
const fluidCanvas = document.getElementById('fluid-canvas');
if (fluidCanvas) {
  fluidCanvas.width = window.innerWidth;
  fluidCanvas.height = window.innerHeight;
  window.addEventListener('resize', () => {
    fluidCanvas.width = window.innerWidth;
    fluidCanvas.height = window.innerHeight;
  });
}
