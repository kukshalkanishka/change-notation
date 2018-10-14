convertNotation = require("../lib/lib.js").convertNotation;

const main = function(){
  let inputNumber = +process.argv[2];
  console.log(convertNotation(inputNumber));
  return; 
}

main();
