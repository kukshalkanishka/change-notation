const countZeroes = require("./libCountZeroes.js").countZeroes;
const divideNumByTens = require("./libDivideNumByTens.js").divideByTens;

const convertNotation = function(inputNumber) {
  let numOfZeroes = 1;
  if(inputNumber !=0){
    numOfZeroes = countZeroes(inputNumber);
  }
  let exponent = numOfZeroes;
  let remainder = divideNumByTens(inputNumber,numOfZeroes);
  let scientificNotation = remainder + "*" + 10 +"^" + exponent;
  return scientificNotation;
}

exports.convertNotation = convertNotation;
