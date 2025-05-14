// auth.js

// ✅ Set your passcode here
const CORRECT_PASSCODE = "monkey123";

// 🔐 Redirect to passcode.html if not authenticated
function checkAuth() {
  if (localStorage.getItem("authenticated") !== "true") {
    window.location.href = "passcode.html";
  }
}

// 🚪 Log the user out
function logout() {
  localStorage.removeItem("authenticated");
  window.location.href = "passcode.html";
}

// 🔑 Call this on passcode.html to validate input
function submitPasscode(input) {
  if (input === CORRECT_PASSCODE) {
    localStorage.setItem("authenticated", "true");
    window.location.href = "index.html"; // Or another landing page
  } else {
    alert("Incorrect passcode.");
  }
}
