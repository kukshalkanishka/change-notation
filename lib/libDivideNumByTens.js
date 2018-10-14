const divideByTens = function(number,tenTimes) {
  let divisor = Math.pow(10, tenTimes);
  let remainder = number / divisor ;
  return remainder;
}

exports.divideByTens = divideByTens;
