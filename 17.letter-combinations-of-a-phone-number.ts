// 2026-02-16 - 15min
/*
 * @lc app=leetcode id=17 lang=typescript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
function letterCombinations(digits: string): string[] {
	let digitMap = new Map([
		["2", ["a", "b", "c"]],
		["3", ["d", "e", "f"]],
		["4", ["g", "h", "i"]],
		["5", ["j", "k", "l"]],
		["6", ["m", "n", "o"]],
		["7", ["p", "q", "r", "s"]],
		["8", ["t", "u", "v"]],
		["9", ["w", "x", "y", "z"]],
	]);

	let arr: string[] = digitMap.get(digits[0])!;

	for (let digit of digits.substring(1)) {
		let newArr: string[] = [];
		for (let string of arr) {
			for (let letter of digitMap.get(digit)!) {
				newArr.push(string + letter);
			}
		}
		arr = newArr;
	}

	return arr;
}

// @lc code=end
