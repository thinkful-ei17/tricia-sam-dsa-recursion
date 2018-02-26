'use strict';

function binaryConversion(num) {
  // Base Case
  if (num === 0){
    return '0';
	}
	if (num === 1){
		return '1';
	}
  // Recursive Case
  return binaryConversion(Math.floor(num/2)) + num % 2;
}

console.log(binaryConversion(39));
console.log(binaryConversion(67));