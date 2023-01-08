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
  lettersLength: 0,
  uppercase: false,
  lowercase: false,
  numeric: false,
  specialCharacters: false,
  passwordLength: 0,
  inRange: false,
  password: ""
}

function inRange(x, min, max) {
  return ((x-min)*(x-max) <= 0);
}

function passwordSplit(){  
  if(options.uppercase && options.lowercase && options.numeric && options.specialCharacters){
    var passwordLength = options.lettersLength / 4
  } else if(options.uppercase && options.lowercase && options.numeric || options.lowercase && options.numeric && options.specialCharacters || options.uppercase && options.numeric && options.specialCharacters || options.lowercase && options.numeric && options.specialCharacters){
    var passwordLength = options.lettersLength / 3
  } else if(options.uppercase && options.lowercase || options.numeric && options.specialCharacters || options.uppercase && options.specialCharacters || options.lowercase && options.numeric || options.uppercase && options.numeric || options.lowercase && options.specialCharacters){
    var passwordLength = options.lettersLength / 2
  }  
  return options.passwordLength = passwordLength
}



function passwordGenerated(numLetters){
var pass = ""

// all options true
  if(options.uppercase && options.lowercase && options.numeric && options.specialCharacters){
    var test1 = getRandom(lowerCasedCharacters, numLetters)
    var test2 = getRandom(upperCasedCharacters, numLetters)
    var test3 = getRandom(specialCharacters, numLetters)
    var test4 = getRandom(numericCharacters, numLetters)
    pass = test1 + test2 + test3 + test4
  } 
  
  // three options true
  else if(options.uppercase && options.lowercase && options.numeric){
    var test1 = getRandom(lowerCasedCharacters, numLetters)
    var test2 = getRandom(upperCasedCharacters, numLetters)
    var test3 = getRandom(numericCharacters, numLetters)
    pass = test1 + test2 + test3
  }
  else if(options.uppercase && options.lowercase && options.specialCharacters){
    var test1 = getRandom(lowerCasedCharacters, numLetters)
    var test2 = getRandom(upperCasedCharacters, numLetters)
    var test3 = getRandom(specialCharacters, numLetters)
    pass = test1 + test2 + test3
  } else if(options.uppercase && options.specialCharacters && options.numeric){
    var test1 = getRandom(specialCharacters, numLetters)
    var test2 = getRandom(upperCasedCharacters, numLetters)
    var test3 = getRandom(numericCharacters, numLetters)
    pass = test1 + test2 + test3
  }else if(options.specialCharacters && options.lowercase && options.numeric){
    var test1 = getRandom(lowerCasedCharacters, numLetters)
    var test2 = getRandom(specialCharacters, numLetters)
    var test3 = getRandom(numericCharacters, numLetters)
    pass = test1 + test2 + test3
  }
  
  // two options true
  else if(options.lowercase && options.uppercase){
    var test1 = getRandom(lowerCasedCharacters, numLetters)
    var test2 = getRandom(upperCasedCharacters, numLetters)
    pass = test1 + test2
  } else if(options.numeric && options.uppercase){
    var test1 = getRandom(numericCharacters, numLetters)
    var test2 = getRandom(upperCasedCharacters, numLetters)
    pass = test1 + test2
  } else if(options.specialCharacters && options.uppercase){
    var test1 = getRandom(specialCharacters, numLetters)
    var test2 = getRandom(upperCasedCharacters, numLetters)
    pass = test1 + test2
  }else if(options.lowercase && options.numeric){
    var test1 = getRandom(lowerCasedCharacters, numLetters)
    var test2 = getRandom(numericCharacters, numLetters)
    pass = test1 + test2
  }else if(options.lowercase && options.specialCharacters){
    var test1 = getRandom(lowerCasedCharacters, numLetters)
    var test2 = getRandom(specialCharacters, numLetters)
    pass = test1 + test2
  }else if(options.numeric && options.specialCharacters){
    var test1 = getRandom(numericCharacters, numLetters)
    var test2 = getRandom(specialCharacters, numLetters)
    pass = test1 + test2
  }
  
  
  // one option true
  else if(options.uppercase){
    var test1 = getRandom(upperCasedCharacters, numLetters)
    pass = test1
  }else if(options.lowercase){
    var test1 = getRandom(lowerCasedCharacters, numLetters)
    pass = test1
  }
  else if(options.numeric){
    var test1 = getRandom(numericCharacters, numLetters)
    pass = test1
  }
  else if(options.specialCharacters){
    var test1 = getRandom(specialCharacters, numLetters)
    pass = test1
  }
   else{
    var test5 ="Please select an option"
    alert("Please ensure password is between 10 and 64 and an option is selected")
    pass = test5
   
  }
  return options.password = pass
}






// Function to prompt user for password options
function getPasswordOptions() {

if(!inRange(options.lettersLength, 10,64)){  
  options.inRange = false
  options.lettersLength = prompt('enter password length from 10 to 64')

  if(inRange(options.lettersLength, 10,64)){
    options.inRange = true
    options.uppercase = confirm("uppercase letters?")
    options.lowercase = confirm("lowercase letters?")
    options.numeric = confirm("numeric letters?")
    options.specialCharacters = confirm("special characters?")  
  }

} 

  
}

// Function for getting a random element from an array
function getRandom(arr, numLetters) {
  word = ''
  for(i=0; i < numLetters; i++) {
    var randomLetter = arr[Math.floor(Math.random() * arr.length)];
    word = word + randomLetter
  }
  return word
}



// Function to generate password with user input
function generatePassword() {
  reset()
  getPasswordOptions()
  passwordSplit()
  passwordGenerated(options.passwordLength)
  return options.password
}



function reset(){
  options.lettersLength = 0,
  options.uppercase = false,
  options.lowercase = false,
  options.numeric = false,
  options.specialCharacters = false,
  options.passwordLength = 0,
  options.inRange = false,
  options.password = ""
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