// 2026-02-17 - 22min

/*
 * @lc app=leetcode id=24 lang=typescript
 *
 * [24] Swap Nodes in Pairs
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

function swapPairs(head: ListNode | null): ListNode | null {
	let dummyHead = new ListNode(0, head);

	let currentNode = head;
	let previousNode: ListNode | null = dummyHead;
	let leftNode: ListNode | null = null;
	let rightNode: ListNode | null = null;

	while (currentNode) {
		if (leftNode) {
			rightNode = currentNode;

			previousNode.next = rightNode;
			leftNode.next = rightNode.next;
			rightNode.next = leftNode;

			currentNode = leftNode;

			leftNode = null;
			rightNode = null;
			previousNode = currentNode;
		} else {
			leftNode = currentNode;
		}

		currentNode = currentNode.next;
	}

	return dummyHead.next;
}
// @lc code=end
