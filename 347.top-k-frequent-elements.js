// 2026-02-11 - 47min
/*
 * @lc app=leetcode id=347 lang=javascript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
	let map = {};
	let largestElements = Array.from({ length: k }, () => ({
		value: undefined,
		frequency: -1,
	}));

	for (let num of nums) {
		if (map[num]) {
			map[num].frequency++;
		} else {
			map[num] = {
				frequency: 1,
			};
		}

		for (let largestElementIndex in largestElements) {
			let largestElement = largestElements[largestElementIndex];
			if (largestElement.value == num) {
				largestElements[largestElementIndex].frequency++;
				break;
			} else if (largestElement.frequency < map[num].frequency) {
				if (map[num].position != undefined) {
					largestElements[map[num].position] =
						largestElements[largestElementIndex];
				}

				if (largestElements[largestElementIndex].value != undefined)
					map[largestElements[largestElementIndex].value].position =
						map[num].position;

				largestElements[largestElementIndex] = {
					frequency: map[num].frequency,
					value: num,
				};
				map[num].position = largestElementIndex;

				break;
			}
		}
	}

	return Array.from({ length: k }, (_, i) => largestElements[i].value);
};
// @lc code=end
