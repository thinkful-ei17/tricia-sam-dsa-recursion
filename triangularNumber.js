'use strict';

//input: [some number] 
//Output: equilateral triangle of *

//compare input with sequence [1, 3, 6, 10, 15, 21, 28, 36, 45]
//ie: input = 5
//output = arr[i] = 1 + 2, 3 + 3, 6 + 4, 10 + 5
//5 = 1 + 2 + 3 + 4 + 5

function triangularNumber(num) {

	if (num === 0)
		return 0;

	return num + (triangularNumber(num - 1));
}

console.log(triangularNumber(34));