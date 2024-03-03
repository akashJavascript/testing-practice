function capitalize(inputString) {
  let arr = inputString.split('');
  let upperChar = arr.shift().toUpperCase();
  arr.unshift(upperChar);
  return arr.join('');
}
function reverseString(inputString) {
  return inputString.split('').reverse().join('');
}
let calcuator = {
  add: (a, b) => {
    return a + b;
  },
  subtract: (a, b) => {
    return a - b;
  },
  multiply: (a, b) => {
    return a * b;
  },
  divide: (a, b) => {
    return a / b;
  },
};
function caesarCipher(inputString, shiftAmount) {
  let alphabet = [
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
    'z',
  ];
  let shiftedAlphabet = [];
  for (let i = 0; i < alphabet.length; i++) {
    if (i + shiftAmount > 25) {
      shiftedAlphabet.push(alphabet[i + shiftAmount - 26]);
    } else {
      shiftedAlphabet.push(alphabet[i + shiftAmount]);
    }
  }
  let inputArray = inputString.split('');
  let outputArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (alphabet.includes(inputArray[i].toLowerCase())) {
      let index = alphabet.indexOf(inputArray[i].toLowerCase());
      if (inputArray[i] === inputArray[i].toUpperCase()) {
        outputArray.push(shiftedAlphabet[index].toUpperCase());
      } else {
        outputArray.push(shiftedAlphabet[index]);
      }
    } else {
      outputArray.push(inputArray[i]);
    }
  }
  return outputArray.join('');
}
function analyzeArray(inputArray) {
  let average = inputArray.reduce((a, b) => a + b) / inputArray.length;
  let min = Math.min(...inputArray);
  let max = Math.max(...inputArray);
  let length = inputArray.length;
  return { average, min, max, length };
}
export { capitalize, reverseString, calcuator, caesarCipher,analyzeArray };
