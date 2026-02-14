// 2026-02-13 - 1h 4min
/*
 * @lc app=leetcode id=42 lang=typescript
 *
 * [42] Trapping Rain Water
 */

// @lc code=start
function trap(height: number[]): number {
	// Using two pointers, one from the start of the array (left) and one from the end (right) converging towards the middle

	if (height.length == 1) return 0;

	let left = 0;
	let leftMax = 0;

	let right = height.length - 1;
	let rightMax = height.length - 1;

	let waterLevel = Math.min(height[leftMax], height[rightMax]);
	let water = waterLevel * (right - left - 1);

	while (left < right - 1) {
		let blockHeight = 0;

		if (height[leftMax] <= height[rightMax]) {
			left++;
			blockHeight = height[left];

			if (height[left] > height[leftMax]) {
				leftMax = left;
			}
		} else {
			right--;
			blockHeight = height[right];

			if (height[right] > height[rightMax]) {
				rightMax = right;
			}
		}

		water -= Math.min(blockHeight, waterLevel);

		let width = rightMax - leftMax - 1;

		let heightDifference = Math.min(height[leftMax], height[rightMax]) - waterLevel;

		waterLevel = Math.min(height[leftMax], height[rightMax]);

		water += heightDifference * width;
	}

	return water;
}
// @lc code=end
