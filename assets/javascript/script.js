// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var length = prompt("How long?")
  console.log(length);
  if (length < 8 || length > 128) {
    alert ("Password must be between 8 and 128 characters");
    return generatePassword();
  }
  c
  return "password";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

