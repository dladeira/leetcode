// 2026-02-08 - 29min

/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} romanString
 * @return {number}
 */
var romanToInt = function (romanString) {
	let accumulator = 0;

	for (
		let romanCharacterIndex = 0;
		romanCharacterIndex < romanString.length;
		romanCharacterIndex++
	) {
		accumulator += readRomanCharacter(
			romanString[romanCharacterIndex],
			romanString[romanCharacterIndex + 1]
		);
	}

	return accumulator;
};

// nextCharacter is nullable when there isn't a next character
function readRomanCharacter(currentCharacter, nextCharacter) {
	let isNegative =
		getValueOfRomanCharacter(currentCharacter) <
		(getValueOfRomanCharacter(nextCharacter) ?? 0);

	return getValueOfRomanCharacter(currentCharacter) * (isNegative ? -1 : 1);
}

function getValueOfRomanCharacter(character) {
	switch (character) {
		case "I":
			return 1;
		case "V":
			return 5;
		case "X":
			return 10;
		case "L":
			return 50;
		case "C":
			return 100;
		case "D":
			return 500;
		case "M":
			return 1000;
		default:
			return null;
	}
}

// @lc code=end
