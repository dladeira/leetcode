// 2026-02-13 - ~35min
/*
 * @lc app=leetcode id=62 lang=typescript
 *
 * [62] Unique Paths
 */

// @lc code=start
function uniquePaths(m: number, n: number): number {
	// We only need one row of memory.
	// Each cell will represent the number of ways to reach it.
	const row = new Array(n).fill(1);

	for (let i = 1; i < m; i++) {
		for (let j = 1; j < n; j++) {
			// The new value is the current value (from the top)
			// + the value to the left.
			row[j] = row[j] + row[j - 1];
		}
	}

	return row[n - 1];
}

// let precalculatedMap: Map<string, number> = new Map();
// function findPaths(height: number, width: number): number {
// 	if (height == 1 || width == 1) {
// 		return 1;
// 	}

// 	let key = Math.max(height, width) + "x" + Math.min(height, width);

// 	if (precalculatedMap.has(key)) return precalculatedMap.get(key)!;

// 	let value = findPaths(height - 1, width) + findPaths(height, width - 1);

// 	precalculatedMap.set(key, value);
// 	return value;
// }

// @lc code=end
