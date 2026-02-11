// 2026-02-11 18min (solving wrong problem :( )
/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strings) {
	let longestPrefix = strings[0];

	for (string of strings) {
		longestPrefix = getLongestPrefix(longestPrefix, string);
	}

	return longestPrefix;
};

function getLongestPrefix(string1, string2) {
	let prefix = "";
	let character = 0;

	while (character < Math.min(string1.length, string2.length)) {
		if (string1[character] == string2[character]) prefix += string1[character];
		else break;
		character++;
	}

	return prefix;
}
// @lc code=end
