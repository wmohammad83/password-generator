// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var options = {
  uppercase: true,
  lowercase: true,
  numeric: true,
  specialCharacters: true
}


// =================================================================================================
// The function below generates random characters from an arrar and adds it to word
// =================================================================================================

function generate(arr, numLetters) {
  word = ''
  for(i=0; i < numLetters; i++) {
    var randomLetter = arr[Math.floor(Math.random() * arr.length)];
    word = word + randomLetter
  }
  return word
}




var randomNumbers = {
  characterType: [],
  uppercase: [],
  lowercase: [],
  numeric: [],
  specialCharacters:[]
}

// Function to prompt user for password options
function getPasswordOptions() {
// Length of password
passwordCriteria.characters = prompt('Please choose a number of characters between 10 and 64')
  
// Lowercase
passwordCriteria.lowercase = confirm('Would you like lowercase letters?')
if(passwordCriteria.lowercase){
  randomNumbers.characterType.push(true)
}

// Uppercase
passwordCriteria.uppercase = confirm('Would you like uppercase letters?')
if(passwordCriteria.uppercase){
  randomNumbers.characterType.push(true)
}

// Numeric
passwordCriteria.numeric = confirm('Would you like uppercase letters?')
if(passwordCriteria.numeric){
  randomNumbers.characterType.push(true)
}
// Special characters ($@%&*, etc)
passwordCriteria.specialCharacters = confirm('Would you like special characters?')
if(passwordCriteria.specialCharacters){
  randomNumbers.characterType.push(true)
}
}

// Function for getting a random element from an array
function getRandom(arr, a) {
  var num = Math.floor(Math.random() * arr.length)
  a.push(num)
  
}

// Function to generate password with user input
function generatePassword() {
  // getPasswordOptions()
 var test1 = generate(lowerCasedCharacters, 5)
 var test2 = generate(upperCasedCharacters, 5)
 var test3 = generate(specialCharacters, 5)
 var test4 = generate(numericCharacters, 5)

 var password = test1 + test2 + test3 + test4

  return password

  
}





// =================================================================================================
// Don't touch below here
// =================================================================================================

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);