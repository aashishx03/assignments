/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function removeSpaceAndPunctuation(str) {
  let newStr = "";
  for (const key of str) {
    if (key == " " || key == "!" || key == "," || key == "?" || key == ".") {
      continue;
    }
    newStr += key.toLowerCase();
  }
  return newStr;
}

function isPalindrome(str) {
  // Reversing the Strign
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }

  // Using Another function to remove spaces and puncutation mark
  const revStr = removeSpaceAndPunctuation(reverseStr);
  const newStr = removeSpaceAndPunctuation(str);

  // Returning Value
  if (revStr != newStr) return false;

  return true;
}

console.log(isPalindrome("Eva, can I see bees in a cave?"));

module.exports = isPalindrome;
