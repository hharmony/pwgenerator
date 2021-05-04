/*acceptance criteria 
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page*/

/*
   
 //pick a random character in array and return it
 function randomCharacter(){
     var character=characters[Math.floor(Math.random()*characters.length)]
     return character;
*/

// Assignment code here
//password options
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var spec = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];

//pasword length 8-128 characters

function genPW(){
  var pwLength=window.prompt("how many characters do you want  your password to be?");
  if(pwLength >= 8 && pwLength <= 128) {
    var lowerConfirm = window.confirm("Do you want to include lower case letters?");
    var upperConfirm = window.confirm("Do you want to include uppercase letteres?");
    var numConfirm = window.confirm("do you want to include numbers?");
    var specConfirm = window.confirm("do you want to include special characters?");
  }
  else {
    window.alert("Please choose a number between 8-128");
    genPW();
  };
  //concatenating from https://www.w3schools.com/jsref/jsref_concat_array.asp#:~:text=The%20concat()%20method%20is,values%20of%20the%20joined%20arrays.
  /*if (lowerConfirm && upperConfirm && numConfirm && specConfirm) {
    pw = lower.concat(upper, num, spec);

    }
    console.log(pw); 
  }*/
  if (lowerConfirm, upperConfirm) {
    var pwOut = [];
    for (i=0 ; i < pwLength; i++) {
      pw = lower.concat(upper)[Math.floor(Math.random()*52)];
      pwOut.push(pw);
    }
    console.log(pwOut.join(''));
  }

  if (lowerConfirm) {
    var pwOut = [];
    for (i = 0; i < pwLength; i++) {
      pw = lower[Math.floor(Math.random()*26)];
      pwOut.push(pw);
    }
    console.log(pwOut.join(''))
  }

}
/*
    for (i = 0; i < pwLength; i++) {
      pw=upper.join('');
        var pwOut = upper[Math.floor(Math.random()*26)];
      console.log(pwOut);
    }
  }
}
*/

//

//joining selections with concatenation
//https://stackoverflow.com/questions/5080028/what-is-the-most-efficient-way-to-concatenate-n-arrays
//4 things confirmed
  //lowerCaseConfirm, upperCaseConfirm, numericConfirm, specCharConfirm



//3
  //lower, upper, num,
  //lower, upper, spec
  //lower, num, spec
  //upper, num, spec
  
//2
  //lower upper
  //lower num
  //lower spec
  //upper num
  //upper spec
  //num spec

//1
  //lower
  //upper
  //num
  //spec



/*
//no prompts selected
  //alert they must choose at least one option
  //restart the function

// 1 prompt confirmed



//display pw in alert or on screen
*/





// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 

genPW();
