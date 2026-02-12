// 2026-02-11 - 1h 11min

/*
 * @lc app=leetcode id=146 lang=typescript
 *
 * [146] LRU Cache
 */

// @lc code=start

type DLLNode = {
	prev: DLLNode | undefined;
	value: number;
	key: number;
	next: DLLNode | undefined;
};

class LRUCache {
	private capacity: number;
	private keyMap: Map<number, DLLNode>;
	private dllHead: DLLNode;
	private dllTail: DLLNode;

	constructor(capacity: number) {
		this.capacity = capacity;
		this.keyMap = new Map();

		this.dllHead = { value: 0, key: 0, next: undefined, prev: undefined };
		this.dllTail = { value: 0, key: 0, next: undefined, prev: undefined };
		this.dllHead.prev = this.dllTail;
		this.dllTail.next = this.dllHead;
	}

	removeFromDLL(key: number) {
		let node = this.keyMap.get(key)!;

		node.prev!.next = node.next;
		node.next!.prev = node.prev;

		this.keyMap.delete(key);
	}

	putIntoDLL(key: number, value: number) {
		let newNode = {
			key,
			value,
			prev: this.dllHead.prev,
			next: this.dllHead,
		};

		this.dllHead.prev!.next = newNode;
		this.dllHead.prev = newNode;

		this.keyMap.set(key, newNode);
	}

	get(key: number): number {
		if (!this.keyMap.has(key)) return -1;

		let node = this.keyMap.get(key)!;

		this.removeFromDLL(key);
		this.putIntoDLL(key, node.value);

		return node.value;
	}

	put(key: number, value: number): void {
		if (this.keyMap.has(key)) {
			this.removeFromDLL(key);
		}

		if (this.keyMap.size + 1 > this.capacity) {
			this.removeFromDLL(this.dllTail.next!.key);
		}

		this.putIntoDLL(key, value);
	}
}

function printDll(tail: DLLNode) {
	let currentNode: DLLNode | undefined = tail;
	while (currentNode) {
		console.log(currentNode.prev?.key, currentNode.key, currentNode.next?.key);
		currentNode = currentNode.next;
	}
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
