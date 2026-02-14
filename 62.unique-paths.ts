// 2026-02-13 - ~35min
/*
 * @lc app=leetcode id=62 lang=typescript
 *
 * [62] Unique Paths
 */

// @lc code=start
function uniquePaths(m: number, n: number): number {
	return findPaths(m, n);
}

let precalculatedMap: Map<string, number> = new Map();
function findPaths(height: number, width: number): number {
	if (height == 1 || width == 1) {
		return 1;
	}

	let key = Math.max(height, width) + "x" + Math.min(height, width);

	if (precalculatedMap.has(key)) return precalculatedMap.get(key)!;

	let value = findPaths(height - 1, width) + findPaths(height, width - 1);

	precalculatedMap.set(key, value);
	return value;
}

// @lc code=end
