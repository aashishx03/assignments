/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length != str2.length) return false;
  let str = str2.toLowerCase();
  for (const key of str1) {
    if (!str.includes(key.toLowerCase())) return false;
  }

  return true;
}

console.log(isAnagram("spar", "rasp"));

module.exports = isAnagram;
