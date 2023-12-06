/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let count = 0;

  for(let k = 0; k < str.length; k++)
  {
    if(str[k] == 'a' || str[k] == 'e' || str[k] == 'i' || str[k] == 'o' || str[k] == 'u'||
      str[k] == 'A' || str[k] == 'E' || str[k] == 'I' || str[k] == 'O' || str[k] == 'U')
    {
      count++;
    }
  }
  return count;
}

module.exports = countVowels;
