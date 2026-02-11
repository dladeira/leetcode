// 2026-02-11 - 47min
// 2026-02-11 - 7min
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
	let map = new Map();

	for (let num of nums) {
		map.set(num, (map.get(num) ?? 0) + 1);
	}

	let buckets = Array.from({ length: nums.length + 1 }, () => []);

	for (let [num, freq] of map) {
		buckets[freq].push(num);
	}

	let results = [];
	for (let i = buckets.length - 1; i >= 0 && results.length < k; i--) {
		results.push(...buckets[i]);
	}

	return results.splice(0, k);
};
// @lc code=end
