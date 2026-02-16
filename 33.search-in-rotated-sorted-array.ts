// 2026-02-16 - 45min (went to bed 187/196 cases)

/*
 * @lc app=leetcode id=33 lang=typescript
 *
 * [33] Search in Rotated Sorted Array
 */

// @lc code=start
function search(nums: number[], target: number): number {
	if (nums.length == 1) return nums[0] == target ? 0 : -1;

	console.log(nums);

	let left = 0;
	let right = nums.length - 1;

	let boundary = (nums[0] + nums[nums.length - 1]) / 2;
	let rotationIndex: number = 0;

	if (nums[right] < nums[left]) {
		while (left <= right) {
			let midpoint = Math.floor((left + right) / 2);
			console.log(left, right, midpoint);

			if (nums[midpoint] > boundary) {
				left = midpoint + 1;
			} else if (nums[midpoint] < boundary) {
				right = midpoint - 1;
			} else {
				rotationIndex = midpoint;
			}

			if (Math.abs(left - right)) {
				rotationIndex = midpoint;
			}
		}

		console.log(rotationIndex);

		nums = nums.slice(rotationIndex, nums.length).concat(nums.slice(0, rotationIndex));
	}

	console.log(nums);

	left = 0;
	right = nums.length - 1;

	while (left <= right) {
		let midpoint = Math.floor((left + right) / 2);
		console.log(left, right, midpoint, nums[midpoint]);

		if (nums[midpoint] > target) {
			right = midpoint - 1;
		} else if (nums[midpoint] < target) {
			left = midpoint + 1;
		} else {
			if (nums[midpoint] < boundary) {
				return midpoint + rotationIndex;
			} else {
				return midpoint - (rotationIndex != 0 ? nums.length - rotationIndex : 0);
			}
		}

		console.log(left, right, midpoint);
	}

	return -1;
}
// @lc code=end
