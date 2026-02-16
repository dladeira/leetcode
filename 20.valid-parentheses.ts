// 2026-02-16 - 7min

/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
function isValid(str: string): boolean {
	let stack: string[] = [];

	for (let char of str) {
		switch (char) {
			case "(":
				stack.push("(");
				break;
			case ")":
				if (!matchesTop("(", stack)) return false;
				break;
			case "[":
				stack.push("[");
				break;
			case "]":
				if (!matchesTop("[", stack)) return false;
				break;
			case "{":
				stack.push("{");
				break;
			case "}":
				if (!matchesTop("{", stack)) return false;
				break;
		}
	}

	return stack.length == 0;
}

function matchesTop(char: string, stack: string[]): boolean {
	let top = stack.pop();
	return top == char;
}
// @lc code=end
