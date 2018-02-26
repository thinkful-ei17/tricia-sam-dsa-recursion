'use strict';
//jan,feb,mar,apr
function stringSplitter(str, word, separator) {

	if (str.length === 0)
		return [word];

	if (str[0] !== separator) {
		word = word + str[0];
		return [...(stringSplitter(str.slice(1), word, separator))];
	} else
		return [word, ...stringSplitter(str.slice(1), '', separator)];

}

console.log(stringSplitter('jan,feb,mar,apr,may', '', ','));