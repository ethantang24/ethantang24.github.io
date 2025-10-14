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
  welcomePopup.classList.add('show');
}
enterBtn.addEventListener('click', () => {
  welcomePopup.classList.remove('show');
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

// -------------------- Birthday Countdown --------------------
if (document.getElementById('countdown')) {
  const birthday = new Date(new Date().getFullYear(), 8, 24); // Sept 24
  function updateCountdown() {
    const now = new Date();
    let nextBday = birthday;
    if (now > birthday) nextBday = new Date(now.getFullYear() +1, 8, 24);
    const diff = nextBday - now;
    const days = Math.floor(diff / (1000*60*60*24));
    const hours = Math.floor((diff / (1000*60*60)) % 24);
    const minutes = Math.floor((diff / (1000*60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    document.getElementById('countdown').innerHTML = `
      <div class="time-box">${days}<span>days</span></div>
      <div class="time-box">${hours}<span>hrs</span></div>
      <div class="time-box">${minutes}<span>min</span></div>
      <div class="time-box">${seconds}<span>sec</span></div>
    `;
  }
  setInterval(updateCountdown, 1000);
  updateCountdown();
}
