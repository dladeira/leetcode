/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
	let tripletsArray = [];

	if (nums.length < 3) return [];

	nums.sort((a, b) => a - b);

	for (var firstBox = 0; firstBox < nums.length - 2; firstBox++) {
		let leftPointer = firstBox + 1;
		let rightPointer = nums.length - 1;

		while (leftPointer < rightPointer) {
			let compoundValue =
				nums[firstBox] + nums[leftPointer] + nums[rightPointer];

			if (compoundValue > 0) {
				rightPointer--;
			} else if (compoundValue < 0) {
				leftPointer++;
			} else {
				let triplet = [
					nums[firstBox],
					nums[leftPointer],
					nums[rightPointer],
				];

				rightPointer--;

				// triplet.sort((a, b) => a - b);

				if (
					tripletsArray.find(
						(value) =>
							value[0] == triplet[0] &&
							value[1] == triplet[1] &&
							value[2] == triplet[2]
					)
				)
					continue;

				tripletsArray.push(triplet);
			}
		}

		// for (
		// 	var secondBox = firstBox + 1;
		// 	secondBox < nums.length - 1;
		// 	secondBox++
		// ) {
		// 	for (
		// 		var thirdBox = secondBox + 1;
		// 		thirdBox < nums.length;
		// 		thirdBox++
		// 	) {
		// 		if (nums[firstBox] + nums[secondBox] + nums[thirdBox] == 0) {
		// 			let triplet = [
		// 				nums[firstBox],
		// 				nums[secondBox],
		// 				nums[thirdBox],
		// 			];

		// 			triplet.sort((a, b) => a - b);

		// 			if (
		// 				tripletsArray.find(
		// 					(value) =>
		// 						value[0] == triplet[0] &&
		// 						value[1] == triplet[1] &&
		// 						value[2] == triplet[2]
		// 				)
		// 			)
		// 				continue;

		// 			tripletsArray.push(triplet);
		// 		}
		// 	}
		// }
	}

	return tripletsArray;
};
// @lc code=end
