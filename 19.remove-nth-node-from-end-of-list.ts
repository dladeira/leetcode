// 2026-02-15 30min
/*
 * @lc app=leetcode id=19 lang=typescript
 *
 * [19] Remove Nth Node From End of List
 */

class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
	let dummyHead = new ListNode(0, head);
	let fastPointer: ListNode | null = dummyHead;
	let lazyPointer: ListNode | null = dummyHead;

	for (let i = 0; i <= n; i++) {
		fastPointer = fastPointer!.next;
	}

	while (fastPointer != null) {
		fastPointer = fastPointer?.next || null;
		lazyPointer = lazyPointer.next!;
	}

	lazyPointer.next = lazyPointer.next?.next || null;

	return head;
}
// @lc code=end
