'use strict';

const countingSheep = function(numOfSheep) {
  // Base Case
  if (numOfSheep === 0) {
    return;
  }

  // Recursive Case
  console.log(numOfSheep + ' - Another sheep jump over the fence');
  countingSheep(numOfSheep - 1);
};

countingSheep(3);