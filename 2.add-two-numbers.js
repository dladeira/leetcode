// 2026-01-31 - 45min

/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} listOne
 * @param {ListNode} listTwo
 * @return {ListNode}
 */
var addTwoNumbers = function (listOne, listTwo) {
	let listOneTraversed = listOne;
	let listTwoTraversed = listTwo;
	let acc = 0;
	let listSum = null;

	while (acc != 0 || listOneTraversed != null || listTwoTraversed != null) {
		let listOneValue = listOneTraversed.val;
		let listTwoValue = listTwoTraversed.val;

		let valueSum = listOneValue + listTwoValue + acc;

		let decemMod = valueSum % 10;

		console.log(
			"Adding",
			listOneValue,
			listTwoValue,
			acc,
			": got",
			decemMod
		);

		if (listSum == null)
			listSum = function ListNode() {
				this.val = decemMod;
				this.next = undefined;
			};
		else {
			let listSumEnd = listSum;
			while (listSumEnd.next != null) {
				listSumEnd = listSumEnd.next;
			}
			listSumEnd.next = function ListNode() {
				this.val = decemMod;
				this.next = undefined;
			};
		}

		console.log(listSum);

		acc = valueSum > 9 ? 1 : 0; // If value over 9, carry "1" to the next iteration
		listOneTraversed = listOneTraversed.next;
		listTwoTraversed = listTwoTraversed.next;
	}

	return listSum;
};
// @lc code=end
