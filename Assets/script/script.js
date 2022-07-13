// Assignment Code
var generateBtn = document.querySelector("#generate");
PW ={length:8,
  Lcase:false,
  Ucase:false,
  numeral:false,
  special:false};

// define attributes of password through promtps, alerts when invalid inputs
function writePassword() {
  var passwordText = document.querySelector("#password");
  let length = prompt("How long would you like your password?" , 8);
  if (length < 8){
    alert("You must choose 8 or more characters. Please restart.");
  }
  if (length > 128){
    alert("Cannot allow more than 128 characters. Please restart.");
  }
  // if (length.type !== 'number'){
  //   alert("Only numbers are accepted. Please restart.");
  // } breaks it for some reason
  else {
    PW.Lcase = confirm("Do you want lowercase letters in your password?");
    PW.Ucase = confirm("Do you want uppercase letters in your password?");
    PW.numeral = confirm("Do you want numbers in your password?");
    PW.special = confirm("Do you want special characters in your password?");
    generatePassword()
  }
function generatePassword() {
  const choice = [];
  const pass = [];
  if (PW.Lcase == true){
  choice.push("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z")
  }
  if (PW.Ucase == true){
    choice.push("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z")
  } 
  if (PW.numeral == true){
    choice.push("0","1","2","3","4","5","6","7","8","9")
  }
  if (PW.special == true){
    choice.push(" ","!","@",'"',"#","$","%","&","'","(",")","*","+","-",".","/",":",";","<",">","?","[","]","^","_","`","{","}","|","~")
  }
  // const pw = characters[Math.floor(Math.random() * characters.length)];
  // passwordText.textContent = pw;
  // for (let i = 0; i < characters.length; i++) {
  //    pass.push(Math.floor(Math.random() * PW.length))
  // };
  // passwordText.textContent = pass;
  console.log(PW);
  console.log(choice);
   }};


// take attributes and plug into function to create password


generateBtn.addEventListener("click", writePassword);


