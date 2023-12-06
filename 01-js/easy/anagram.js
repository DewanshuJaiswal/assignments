/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // removing all spaces and converting to lowercase
  const newStr1 = str1.toLowerCase();
  const newStr2 = str2.toLowerCase();

  if(newStr1.length !== newStr2.length)return false;

  let freq = new Array(26).fill(0);

  for(let i = 0; i < newStr1.length; i++)
  {
      freq[newStr1[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;   // charCodeAt(0) used for getting ascii values
  }
  for(let i = 0; i < newStr2.length; i++)
  {
      freq[newStr2[i].charCodeAt(0) - 'a'.charCodeAt(0)]--;
  }
  for(let i = 0; i < 26; i++)
  {
      if(freq[i] !== 0)return false;
  }
  return true;

}

module.exports = isAnagram;
