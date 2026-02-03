// 2026-02-01 - 30min

/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
function lengthOfLongestSubstring(inputString: string): number {
	let maxLength = 0;

	let characterArray: string[] = [];

	for (let character of inputString) {
		console.log(characterArray);
		if (characterArray.includes(character)) {
			let existingCharacterIndex = characterArray.indexOf(character);
			characterArray = characterArray.filter(
				(val: string, index: number) => index > existingCharacterIndex
			);
			characterArray.push(character);
		} else {
			characterArray.push(character);
		}

		maxLength = Math.max(maxLength, characterArray.length);
	}

	return maxLength;
}
// @lc code=end
