// Assignment Code
var generateBtn = document.querySelector("#generate");

// define attributes of password through promtps, alerts when invalid inputs
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  let length = prompt("How long would you like your password?" , 8);
  if (length < 8){
    alert("You must choose 8 or more characters. Please restart.");
  }
  if (length > 128){
    alert("Cannot allow more than 128 characters. Please restart.");
  }
  if (length.typeof != "number"){
    alert("Only numbers are accepted. Please restart.")
  }
  else {
    let Lcase = confirm("Do you want lowercase letters included?");
    let Ucase = confirm("Do you want upperccase letters included?");
    let numeral = confirm("Do you want numbers included?");
    let special = confirm("Do you want special characters?");
  }
  
  
  passwordText.value = password;

}
// take attributes and plug into function to create password
function generatePassword() {
  password 
}

generateBtn.addEventListener("click", writePassword);
