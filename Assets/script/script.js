// Assignment Code
var generateBtn = document.querySelector("#generate");
PW ={};

// define attributes of password through promtps, alerts when invalid inputs
function writePassword() {
  var passwordText = document.querySelector("#password");
  const PW = {};
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
    let PW = {
      length:length,
      Lcase:confirm("Do you want lowercase letters included?"),
      Ucase:confirm("Do you want uppercase letters included?"),
      numeral:confirm("Do you want numbers included?"),
      special:confirm("Do you want special characters?")
    }
    if (PW.Lcase == false && PW.Ucase == false && PW.numeral == false && PW.special == false){
      alert("You must have some characters included. Please restart.")
    }
    function generatePassword() {
      const characters = [];
      if (PW.Lcase = true){
        characters.push("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z")
      }
      if (PW.Ucase = true){
        characters.push("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z")
      }
      if (PW.numeral = true){
        characters.push("0","1","2","3","4","5","6","7","8","9")
      }
      if (PW.special = true){
        characters.push(" ","!","@",'"',"#","$","%","&","'","(",")","*","+","-",".","/",":",";","<",">","?","[","]","^","_","`","{","}","|","~")
      }
      const pw = characters[Math.floor(Math.random() * characters.length)];
      passwordText.textContent = pw;
    }
  generatePassword();
  };


}

// take attributes and plug into function to create password


generateBtn.addEventListener("click", writePassword);
console.log(password);

