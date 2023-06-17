function letterCombinations(digits) {
  //Complete the function

  // const digitToLetters = {
  //   '2': 'abc',
  //   '3': 'def',
  //   '4': 'ghi',
  //   '5': 'jkl',
  //   '6': 'mno',
  //   '7': 'pqrs',
  //   '8': 'tuv',
  //   '9': 'wxyz'
  // };

  var combinations = [];

  // Helper function to generate combinations recursively
  function generateCombinations(currentCombination, remainingDigits) {
    // Base case: All digits have been processed
    if (remainingDigits.length === 0) {
      combinations.push(currentCombination);
      return;
    }

    let currentDigit = remainingDigits[0];
    let letters = digitToLetters[currentDigit];

    // Iterate through each letter of the current digit
    for (let i = 0; i < letters.length; i++) {
      let letter = letters[i];
      generateCombinations(
        currentCombination + letter,
        remainingDigits.slice(1) // Slice off the processed digit
      );
    }
  }

  if (digits.length > 0) {
    generateCombinations('', digits);
  }

  return combinations;
}
	
}

module.exports = letterCombinations;
