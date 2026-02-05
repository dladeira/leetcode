// 2026-02-06 - 2h and gave up with half cases passing

/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
/**
 * @param {number[]} array1
 * @param {number[]} array2
 * @return {number}
 */
var findMedianSortedArrays = function (array1, array2) {
	let leftBound = 0;
	let rightBound = array1.length - 1;
	let midpointIndex = Math.floor((leftBound + rightBound) / 2);
	let i = 0;

	const targetItemCount = Math.floor((array1.length + array2.length) / 2) + 1;

	console.log(array1);
	console.log(array2);
	console.log(targetItemCount);
	console.log();

	while (true) {
		if (i++ > 20) return;

		let midpointValue = array1[midpointIndex];
		console.log("current array1 midpoint:", midpointIndex, midpointValue);

		const array2Items = getNumberOfItemsLessThanOrEqual(
			midpointValue,
			array2
		);
		console.log(midpointValue, array2, array2Items);

		console.log(midpointIndex + 1, array2Items);
		console.log("total item count", midpointIndex + 1 + array2Items);

		if (midpointIndex + 1 + array2Items == targetItemCount) {
			return midpointValue;
		}

		if (midpointIndex + 1 + array2Items > targetItemCount) {
			midpointIndex--;
		} else {
			midpointIndex++;
		}

		console.log();
	}
};

function getNumberOfItemsLessThanOrEqual(value, array) {
	let leftBound = 0;
	let rightBound = array.length - 1;

	while (true) {
		let midpointIndex = Math.floor((leftBound + rightBound) / 2);

		let midpointValue = array[midpointIndex];

		if (Math.abs(leftBound - rightBound) <= 1) {
			if (value >= array[rightBound]) return rightBound + 1;
			if (value >= array[leftBound]) return leftBound + 1;
			if (value < array[leftBound]) return leftBound;
			return leftBound;
		}

		if (midpointValue < value) {
			leftBound = midpointIndex;
		} else if (midpointValue > value) {
			rightBound = midpointIndex;
		} else {
			return midpointIndex + 1;
		}
	}
}

function getMidpoint(array) {
	if (array.length % 2 == 0) {
		return calculateAverage(
			array[array.length / 2],
			array[array.length / 2 - 1]
		);
	} else {
		return array[Math.floor(array.length / 2)];
	}
}

function calculateAverage(num1, num2) {
	return (num1 + num2) / 2;
}

// console.log(getNumberOfItemsLessThanOrEqual(1, [2]));

console.log(findMedianSortedArrays([1, 3], [2, 2]));

// @lc code=end
