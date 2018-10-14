const countZeroes = function(inputNumber) {
  let numberOfZeroes = 0;
  let number = inputNumber;
  while(number%10==0){
    number = number/10;
    numberOfZeroes++;
  }
  return numberOfZeroes;
}

exports.countZeroes = countZeroes;
