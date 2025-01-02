const palindromes = function (word) {
  let counter = 0;

  let newWord = word.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, "");
  newWord = newWord.replace(/\s+/g, '');

  for(let i = newWord.length - 1; i >= 0; i--) {
    if(newWord[i].toLowerCase() != newWord[counter].toLowerCase()) {
      return false;
    }
    counter++;
  }

  return true;
};

// can also create a variable with all available characters
// lowercase, then split, filter, and join

// Do not edit below this line
module.exports = palindromes;