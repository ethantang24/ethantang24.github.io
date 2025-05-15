// auth.js

const CORRECT_PASSCODE = "monkey123";
const COOKIE_NAME = "auth";
const COOKIE_VALUE = "true";
const COOKIE_DURATION_DAYS = 7;

// ✅ Set cookie
function setAuthCookie() {
  const d = new Date();
  d.setTime(d.getTime() + (COOKIE_DURATION_DAYS * 24 * 60 * 60 * 1000));
  const expires = "expires=" + d.toUTCString();
  document.cookie = COOKIE_NAME + "=" + COOKIE_VALUE + ";" + expires + ";path=/";
}



// 🔍 Read cookie
function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let i = 0; i < cookies.length; i++) {
    const parts = cookies[i].split("=");
    if (parts[0] === name) {
      return parts[1];
    }
  }
  return null;
}

// 🔐 Check if user is authenticated
function checkAuth() {
  if (getCookie(COOKIE_NAME) !== COOKIE_VALUE) {
    // Save current page URL before redirecting
    localStorage.setItem("redirectAfterLogin", window.location.href);
    window.location.href = "passcode.html";
  }
}

// 🔑 Validate passcode
function submitPasscode(input) {
  if (input === CORRECT_PASSCODE) {
    setAuthCookie();
    // Redirect back to original page if saved
    const redirectTo = localStorage.getItem("redirectAfterLogin") || "index.html";
    localStorage.removeItem("redirectAfterLogin");
    window.location.href = redirectTo;
  } else {
    alert("Incorrect passcode.");
  }
}

// 🚪 Log out
function logout() {
  clearAuthCookie();
  window.location.href = "passcode.html";
}
