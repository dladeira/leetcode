// 2026-02-04 - 31m

/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} word
 * @return {string}
 */
var longestPalindrome = function (word) {
	let maxPalindromic = "";

	for (let startLetter = 0; startLetter < word.length; startLetter++) {
		for (
			let endLetter = startLetter;
			endLetter < word.length;
			endLetter++
		) {
			if (endLetter - startLetter < maxPalindromic.length) continue;

			let currentPalindromic = word.substring(startLetter, endLetter + 1);

			if (isPalindrome(currentPalindromic)) {
				if (currentPalindromic.length > maxPalindromic.length) {
					maxPalindromic = currentPalindromic;
				}
			}
		}
	}

	return maxPalindromic;
};

function isPalindrome(string) {
	let startLetterIndex = 0;
	let endLetterIndex = string.length - 1;

	while (startLetterIndex < endLetterIndex) {
		if (string[startLetterIndex] != string[endLetterIndex]) return false;
		endLetterIndex--;
		startLetterIndex++;
	}

	return true;
}
// @lc code=end
