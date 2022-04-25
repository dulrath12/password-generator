// Assignment Code
var generateBtn = document.querySelector("#generate");

var NUMBER_CHAR_CODES = arrayfromLowtoHigh(48, 57)
var LOWERCASE_CHAR_CODES = arrayfromLowtoHigh(97, 122)
var UPPERCASE_CHAR_CODES = arrayfromLowtoHigh(65, 90)
var CHARACTER_CHAR_CODES = arrayfromLowtoHigh(33, 47).concat(
  arrayfromLowtoHigh(58, 64)
).concat(
  arrayfromLowtoHigh(91, 96)
).concat(
  arrayfromLowtoHigh(123, 126)
)

console.log(CHARACTER_CHAR_CODES)


function arrayfromLowtoHigh(low, high){
  var array = []
  for (let i = low; i <= high; i++){
    array.push(i)
  }
  return array
}

console.log()


// Write password to the #password input
function writePassword() {

  var passwordlength = window.prompt("How many Characters would you like? Must be between 8 - 128")
  if (passwordlength < 8 || passwordlength > 128) {
    alert("Password needs to be between defined length. (8-128)");
  }

  var lowercase = window.confirm("Do you want lowercase letters?")
  var uppercase = window.confirm("Do you want UPPERCASE letters?")
  var numbers = window.confirm("Do you want Numbers?")
  var characters = window.confirm("Do you want Special Characters?")

  var characterAmount = passwordlength
  var includeCharacters = characters
  var includeLowercase = lowercase
  var includeNumbers = numbers
  var includeUppercase = uppercase

  function generatePassword(characterAmount, includeCharacters, includeLowercase, includeUppercase, includeNumbers){
    
  

    var charCodes = []
    if (includeCharacters === true) {charCodes = charCodes.concat(CHARACTER_CHAR_CODES)};
    if (includeLowercase === true) {charCodes = charCodes.concat(LOWERCASE_CHAR_CODES)};
    if (includeNumbers === true) {charCodes = charCodes.concat(NUMBER_CHAR_CODES)};
    if (includeUppercase === true) {charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)};
    
    var passwordCharacters = []
    for (let i = 0; i < characterAmount; i++){
      var characterCode = charCodes[Math.floor(Math.random() * 84)]
      passwordCharacters.push(String.fromCharCode(characterCode))
    }
    return passwordCharacters.join('')
    }


    var password = generatePassword(characterAmount, includeCharacters, includeLowercase, includeUppercase, includeNumbers);
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
    
    console.log(password)
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)