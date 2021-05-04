/* 
https://www.w3schools.com/jsref/jsref_join.asp
concatenating from https://www.w3schools.com/jsref/jsref_concat_array.asp#:~:text=The%20concat()%20method%20is,values%20of%20the%20joined%20arrays.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
https://www.codegrepper.com/code-examples/javascript/js+pull+random+items+from+multiple+arrays
*/

// Assignment code here
//password options
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var spec = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];

//password length 8-128 characters

function generatePassword(){
  var pwLength=window.prompt("How many characters do you want your password to be?");
  if(pwLength >= 8 && pwLength <= 128) {
    var lowerConfirm = window.confirm("Do you want to include lowercase letters?");
    var upperConfirm = window.confirm("Do you want to include uppercase letters?");
    var numConfirm = window.confirm("Do you want to include numbers?");
    var specConfirm = window.confirm("Do you want to include special characters?");
  }
  else {
    window.alert("Please choose a number between 8-128.");
    generatePassword();
  };

 //4 options 
 if (lowerConfirm && upperConfirm && numConfirm && specConfirm) {
  var pwOut = [];
  for (i=0 ; i < pwLength; i++) {
    pw = lower.concat(upper,num,spec)[Math.floor(Math.random()*72)];
        pwOut.push(pw);
      }
      return pwOut.join('');
}

 //3 options
 else if (lowerConfirm && upperConfirm && numConfirm && !specConfirm) {
  var pwOut = [];
  for (i=0 ; i < pwLength; i++) {
    pw = lower.concat(upper, num)[Math.floor(Math.random()*62)];
    pwOut.push(pw);
  }
    return pwOut.join('');
}
else if (lowerConfirm && upperConfirm && specConfirm && !numConfirm) {
  var pwOut = [];
  for (i=0 ; i < pwLength; i++) {
    pw = lower.concat(upper, spec)[Math.floor(Math.random()*62)];
    pwOut.push(pw);
  }
  return pwOut.join('');
}
else if (lowerConfirm && specConfirm && numConfirm && !upperConfirm) {
  var pwOut = [];
  for (i=0 ; i < pwLength; i++) {
    pw = lower.concat(spec, num)[Math.floor(Math.random()*46)];
    pwOut.push(pw);
  }
  return pwOut.join('');
}
else if (specConfirm && upperConfirm && numConfirm && !lowerConfirm) {
  var pwOut = [];
  for (i=0 ; i < pwLength; i++) {
    pw = spec.concat(upper, num)[Math.floor(Math.random()*46)];
    pwOut.push(pw);
  }
  return pwOut.join('');
}

 //2 options
  else if (lowerConfirm && upperConfirm && !numConfirm && !specConfirm) {
    var pwOut = [];
    for (i=0 ; i < pwLength; i++) {
      pw = lower.concat(upper)[Math.floor(Math.random()*52)];
      pwOut.push(pw);
    }
    return pwOut.join('');
  }
  else if (lowerConfirm && numConfirm && !upperConfirm && !specConfirm) {
    var pwOut = [];
    for (i=0 ; i < pwLength; i++) {
      pw = lower.concat(num)[Math.floor(Math.random()*36)];
      pwOut.push(pw);
    }
    return pwOut.join('');
  }
  else if (lowerConfirm && specConfirm && !upperConfirm && !numConfirm) {
    var pwOut = [];
    for (i=0 ; i < pwLength; i++) {
      pw = lower.concat(spec)[Math.floor(Math.random()*36)];
      pwOut.push(pw);
    }
    return pwOut.join('');  
  }
  else if (upperConfirm && numConfirm && !lowerConfirm && !specConfirm) {
    var pwOut = [];
    for (i=0 ; i < pwLength; i++) {
      pw = upper.concat(num)[Math.floor(Math.random()*36)];
      pwOut.push(pw);
    }
    return pwOut.join('');  
  }
  else if (upperConfirm && specConfirm && !lowerConfirm && !numConfirm) {
    var pwOut = [];
    for (i=0 ; i < pwLength; i++) {
      pw = upper.concat(spec)[Math.floor(Math.random()*36)];
      pwOut.push(pw);
    }
    return pwOut.join('');
    }
  else if (numConfirm && specConfirm && !lowerConfirm && !upperConfirm) {
    var pwOut = [];
    for (i=0 ; i < pwLength; i++) {
      pw = num.concat(spec)[Math.floor(Math.random()*20)];
      pwOut.push(pw);
    }
    return pwOut.join('');
    }
//1 option
  else if (lowerConfirm && !upperConfirm && !specConfirm && !numConfirm) {
    var pwOut = [];
    for (i = 0; i < pwLength; i++) {
      pw = lower[Math.floor(Math.random()*26)];
      pwOut.push(pw);
    }
    return pwOut.join('');
    }
  else if (!lowerConfirm && upperConfirm && !specConfirm && !numConfirm) {
    var pwOut = [];
    for (i = 0; i < pwLength; i++) {
      pw = upper[Math.floor(Math.random()*26)];
      pwOut.push(pw);
    }
    return pwOut.join('');
    }
  else if (!lowerConfirm && !upperConfirm && !specConfirm && numConfirm) {
    var pwOut = [];
    for (i = 0; i < pwLength; i++) {
      pw = num[Math.floor(Math.random()*10)];
      pwOut.push(pw);
    }
    return pwOut.join('');
    }
  else if (specConfirm && !numConfirm && !upperConfirm && !lowerConfirm) {
    var pwOut = [];
    for (i = 0; i < pwLength; i++) {
      pw = spec[Math.floor(Math.random()*10)];
      pwOut.push(pw);
    }
    return pwOut.join('');
    }
 //nothing chosen
  else {
    window.alert("Please select at least one option.");
    generatePassword();
  }
}

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


