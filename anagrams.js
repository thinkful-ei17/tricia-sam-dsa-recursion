'use strict';

function anagrams(str, prefix=''){
  // Base Case
  if (str.length <= 1){
    console.log(prefix + str);
    return;
  }
  // Recursive Case
  for (let i=0; i<str.length; i++){
    let stringModified = prefix + str.slice(i, i+1);
    anagrams(str.slice(0, i) + str.slice(i+1, str.length), stringModified);
  }
}

anagrams('tricia');