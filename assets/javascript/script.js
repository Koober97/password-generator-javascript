// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays that contain the different possible character choices
var characterLength = 8;
var choiceArr = [];

var lowerCaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberArr = ['1','2','3','4','5','6','7','8','9','0',];
var specialCharArr = ['!','@','#','$','%','^','&','*','(',')'];

// Function to generate Password using the chosen prompts
function generatePassword() { 
  var password = "";
  for(var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length)
    password = password + choiceArr[randomIndex];
  }
  return password;
}

// Prompts/Criteria that are asked in order to generate the password
function getPrompts() {
  choiceArr = [];
  
  characterLength = prompt("How many characters would you like for your password to contain? (Choose a number between 8 and 128)");
  
  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Please select a number that is between 8 and 128.");
    return false;
  }
  if (confirm("Would you like to use lowercase letters in your password?")) {
    choiceArr = choiceArr.concat(lowerCaseArr);
  }
  if (confirm("Would you like to use uppercase letters in your password?")) {
    choiceArr = choiceArr.concat(upperCaseArr);
  }
  if (confirm("Would you like to use numbers in your password?")) {
    choiceArr = choiceArr.concat(numberArr);
  }
  if (confirm("Would you like to use special characters in your password?")) {
    choiceArr = choiceArr.concat(specialCharArr);
  }
  return true;
}

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();

  if (correctPrompts) {
    var newPassword = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

