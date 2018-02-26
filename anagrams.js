'use strict';

function anagrams(word, prefix) {
	// Base Case
	if (iterate === word.length) {
		return;
	}
	// Recursive Case
	for (let i = 0; i < word.length; i++) {
		word[prefix];
	}
	anagrams(word.slice(1) + word[0]);
	return;
}

anagrams('play', 0);