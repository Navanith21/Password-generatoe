function generatePassword(length, elementId) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  document.getElementById(elementId).innerText = password;
}

function generateBoth() {
  generatePassword(12, "password12");
  generatePassword(8, "password8");
}

function resetPasswords() {
  document.getElementById("password12").innerText = "12 letter password";
  document.getElementById("password8").innerText = "8 letter password";
}
