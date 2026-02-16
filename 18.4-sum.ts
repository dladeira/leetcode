// 2026-02-17 - 20min
/*
 * @lc app=leetcode id=18 lang=typescript
 *
 * [18] 4Sum
 */

// @lc code=start
function fourSum(nums: number[], target: number): number[][] {
	if (nums.length < 4) return [];

	let combinations: [number, number, number, number][] = [];

	nums.sort((a, b) => a - b);

	for (let a = 0; a < nums.length - 3; a++) {
		if (nums[a - 1] == nums[a] && a > 0) continue;

		for (let b = a + 1; b < nums.length - 2; b++) {
			if (nums[b - 1] == nums[b] && b > a + 1) continue;

			let left = b + 1;
			let right = nums.length - 1;
			while (right > left) {
				let sum = nums[a] + nums[b] + nums[left] + nums[right];

				if (sum == target) {
					combinations.push([nums[a], nums[b], nums[left], nums[right]]);

					while (nums[left] == nums[left + 1]) {
						left++;
					}
					while (nums[right] == nums[right - 1]) {
						right--;
					}

					left++;
					right--;
				} else if (sum > target) {
					right--;
				} else {
					left++;
				}
			}
		}
	}

	return combinations;
}
// @lc code=end
