// 2026-02-11 - 27min

/*
 * @lc app=leetcode id=16 lang=javascript
 *
 * [16] 3Sum Closest
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
	let closestSum = nums[0] + nums[1] + nums[2];

	nums.sort((a, b) => a - b);

	for (let mainPointer = 0; mainPointer < nums.length - 2; mainPointer++) {
		let leftPointer = mainPointer + 1;
		let rightPointer = nums.length - 1;

		while (leftPointer < rightPointer) {
			let sum = nums[mainPointer] + nums[leftPointer] + nums[rightPointer];

			if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
				closestSum = sum;
			}

			if (sum == target) return target;

			if (sum > target) {
				rightPointer--;
			} else {
				leftPointer++;
			}
		}
	}

	return closestSum;
};
// @lc code=end
