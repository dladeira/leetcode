// 2026-01-31 - 45min

/*
 * @lc app=leetcode id=2 lang=typescript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// class ListNode {
// 	val: number;
// 	next: ListNode | null;
// 	constructor(val?: number, next?: ListNode | null) {
// 		this.val = val === undefined ? 0 : val;
// 		this.next = next === undefined ? null : next;
// 	}
// }

function addTwoNumbers(
	listOne: ListNode | null,
	listTwo: ListNode | null
): ListNode | null {
	let listOneTraversed = listOne;
	let listTwoTraversed = listTwo;
	let acc = 0;
	let listSum: ListNode | null = null;
	let listSumHead: ListNode | null = null;

	while (acc != 0 || listOneTraversed != null || listTwoTraversed != null) {
		let listOneValue = listOneTraversed?.val || 0;
		let listTwoValue = listTwoTraversed?.val || 0;

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

		if (listSum == null) {
			listSum = new ListNode(decemMod, undefined);
			listSumHead = listSum;
		} else {
			listSumHead.next = new ListNode(decemMod, undefined);
			listSumHead = listSumHead.next;
		}

		console.log(listSum);

		acc = valueSum > 9 ? 1 : 0; // If value over 9, carry "1" to the next iteration
		listOneTraversed = listOneTraversed ? listOneTraversed.next : null;
		listTwoTraversed = listTwoTraversed ? listTwoTraversed.next : null;
	}

	return listSum;
}
// @lc code=end
