// 2026-02-12 - 1hr 32min (gave up at the end, used internet)
/*
 * @lc app=leetcode id=200 lang=typescript
 *
 * [200] Number of Islands
 */

// @lc code=start
function numIslands(grid: string[][]): number {
	if (grid.length == 0 || grid[0].length == 0) return 0;

	let height = grid.length;
	let width = grid[0].length;
	let islands = 0;
	let visitedGrid = grid.map((i) => i.map(() => 0));

	for (let row = 0; row < height; row++) {
		for (let col = 0; col < width; col++) {
			if (visitedGrid[row][col] == 0 && grid[row][col] == "1") {
				visitedGrid[row][col] = 1;
				let visitQueue: [number, number][] = [[row, col]];
				islands++;
				while (visitQueue.length > 0) {
					let target = visitQueue.pop() as [number, number];

					let buddies: [number, number][] = [
						[target[0], target[1] + 1],
						[target[0] - 1, target[1]],
						[target[0] + 1, target[1]],
						[target[0], target[1] - 1],
					];

					for (let buddy of buddies) {
						if (
							buddy[0] < 0 ||
							buddy[0] >= grid.length ||
							buddy[1] < 0 ||
							buddy[1] >= grid[0].length
						)
							continue;

						if (
							grid[buddy[0]][buddy[1]] == "1" &&
							visitedGrid[buddy[0]][buddy[1]] == 0
						) {
							visitQueue.push(buddy);
							visitedGrid[buddy[0]][buddy[1]] = 1;
						}
					}
				}
			}
		}
	}

	return islands;
}
// @lc code=end
