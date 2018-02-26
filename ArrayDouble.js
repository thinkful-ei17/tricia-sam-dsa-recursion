'use strict';

//input = array of numbers
//output = array with each input value, doubled

function doubleArray(arr) {
	console.log('arr = ', arr);

	if (arr.length === 0) {
		return [];
	}
	return [(arr[0] * 2), ...doubleArray(arr.slice(1))];

}


console.log(doubleArray([1, 2, 3]));