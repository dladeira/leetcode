// 2026-02-12 - 10min

/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
	if (intervals.length <= 1) return intervals;

	intervals.sort((a, b) => a[0] - b[0]);

	let finalIntervals = [];

	for (let i = 0; i < intervals.length; i++) {
		let startInterval = intervals[i];

		for (let j = i + 1; j < intervals.length; j++, i++) {
			let targetInterval = intervals[j];

			if (targetInterval[0] <= startInterval[1]) {
				startInterval[1] = Math.max(targetInterval[1], startInterval[1]);
			} else {
				break;
			}
		}

		finalIntervals.push(startInterval);
	}

	return finalIntervals;
};
// @lc code=end
