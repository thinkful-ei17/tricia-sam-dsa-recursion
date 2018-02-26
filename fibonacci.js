'use strict';

function fibonacci(num, total=0, previousTotal=0) {
  if (num === 0) {
    return;
  }
  let newTotal;
  if (total === 0) {
    newTotal = total + 1;
  }
  else {
    newTotal = total + previousTotal;
    previousTotal = total;
  }
  console.log(newTotal);
  fibonacci(num - 1, newTotal, previousTotal);
}

fibonacci(7);