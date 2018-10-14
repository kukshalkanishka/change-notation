const lib = require("../lib/lib.js");
const countZeroesLib = require("../lib/libCountZeroes.js");
const divideNumByTensLib = require("../lib/libDivideNumByTens.js")
const assert = require("assert");

const countZeroes = countZeroesLib.countZeroes;
assert.equal(countZeroes(2),0);
assert.equal(countZeroes(30),1);
assert.equal(countZeroes(980),1);
assert.equal(countZeroes(9000),3);

const divideNumByTens = divideNumByTensLib.divideByTens;
assert.equal(divideNumByTens(3,0),3);
assert.equal(divideNumByTens(10,1),1);
assert.equal(divideNumByTens(2300,2),23);
assert.equal(divideNumByTens(90000,4),9);

const convertNotation = lib.convertNotation;
assert.equal(convertNotation(3),(3+"*"+10+"^"+0));
assert.equal(convertNotation(30),(3+"*"+10+"^"+1));
assert.equal(convertNotation(4100),(41+"*"+10+"^"+2));
assert.equal(convertNotation(12313),(12313+"*"+10+"^"+0));
assert.equal(convertNotation(90000),(9+"*"+10+"^"+4));


