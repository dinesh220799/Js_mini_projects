const input = document.getElementById("input");
const alertBox = document.getElementById("alert-box");

function check() {
  const value = input.value;
  const reverse = reverseString(value);
  if (value === reverse) {
    showAlert("P A L I N D R O M E");
  } else {
    showAlert("NOT TODAY", true);
  }
  input.value = "";
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

function showAlert(message, isError = false) 
{
  alertBox.textContent = message;
  alertBox.className = `alert-box ${isError ? 'error' : ''} show`;
  setTimeout(() => {
    alertBox.className = `alert-box`;
  }, 1000); 
}
