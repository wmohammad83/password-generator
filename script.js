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

// Starting options 
var options = {
  lettersLength: 0,
  uppercase: false,
  lowercase: false,
  numeric: false,
  specialCharacters: false,
  passwordLength: 0,
  inRange: false,
  password: "",
  passwordMixed: ""
}

// Resets the options to its initial state
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

// Checks to see if the password range is in range
function inRange(x, min, max) {
  return ((x-min)*(x-max) <= 0);
}

// Splits the password length according to the choice of letters and options
function passwordSplit(){  
  if(options.uppercase && options.lowercase && options.numeric && options.specialCharacters){
    var passwordLength = options.lettersLength / 4
  } else if(options.uppercase && options.lowercase && options.numeric || options.lowercase && options.numeric && options.specialCharacters || options.uppercase && options.numeric && options.specialCharacters || options.lowercase && options.numeric && options.specialCharacters){
    var passwordLength = options.lettersLength / 3
  } else if(options.uppercase && options.lowercase || options.numeric && options.specialCharacters || options.uppercase && options.specialCharacters || options.lowercase && options.numeric || options.uppercase && options.numeric || options.lowercase && options.specialCharacters){
    var passwordLength = options.lettersLength / 2
  }  else if (options.uppercase || options.lowercase || options.numeric || options.specialCharacters){
    var passwordLength = options.lettersLength
  }
  return options.passwordLength = passwordLength
}

// Generates the password
function passwordGenerated(numLetters){
    var pass = ""
    var lower = getRandom(lowerCasedCharacters, numLetters)
    var upper = getRandom(upperCasedCharacters, numLetters)
    var special = getRandom(specialCharacters, numLetters)
    var num = getRandom(numericCharacters, numLetters)

// all options true
  if(options.uppercase && options.lowercase && options.numeric && options.specialCharacters){
    pass = lower + upper + special + num
  } 
  // three options true
  else if(options.uppercase && options.lowercase && options.numeric){
    pass = lower + upper + num
  }else if(options.uppercase && options.lowercase && options.specialCharacters){
    pass = lower + upper + special
  }else if(options.uppercase && options.specialCharacters && options.numeric){
    pass = special + upper + num
  }else if(options.specialCharacters && options.lowercase && options.numeric){
    pass = lower + special + num
  }
  // two options true
  else if(options.lowercase && options.uppercase){
    pass = lower + upper
  }else if(options.numeric && options.uppercase){
    pass = num + upper
  }else if(options.specialCharacters && options.uppercase){
    pass = special + upper
  }else if(options.lowercase && options.numeric){
    pass = lower + num
  }else if(options.lowercase && options.specialCharacters){
    pass = lower + special
  }else if(options.numeric && options.specialCharacters){
    pass = num + special
  }
  // one option true
  else if(options.uppercase){
    pass = upper
  }else if(options.lowercase){
    pass = lower
  }else if(options.numeric){
    pass = num
  }else if(options.specialCharacters){
    pass = special
  }else{
    var msg =""
    alert("Please ensure password is between 10 and 64 and at least one option is selected")
    pass = msg
  }
  return options.password = pass
}

// Shuffles the password by putting it into an array first mixing the letters and then putitng it back into a string
function shuffle(string) {
  // Convert String to array
  var arr = string.split('');           
  arr.sort(function() {
    return 0.5 - Math.random();
  });  
  // Convert Array to string
  string = arr.join('');                
  return string;  
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
  options.passwordMixed = shuffle(options.password)
  return options.passwordMixed
}

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