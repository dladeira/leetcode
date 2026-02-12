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
	}

	get(key: number): number {
		if (!this.keyMap.has(key)) return -1;

		let node = this.keyMap.get(key)!;

		if (node.next != undefined) {
			if (node.prev) {
				node.prev.next = node.next;
				node.next.prev = node.prev;
			} else {
				this.dllTail = node.next;
				node.next.prev = undefined;
			}
			node.prev = this.dllHead;
			this.dllHead.next = node;
			node.next = undefined;
		} else {
		}

		this.dllHead = node;

		return node.value;
	}

	put(key: number, value: number): void {
		if (this.keyMap.has(key)) {
			let node = this.keyMap.get(key)!;
			node.value = value;

			if (node.next != undefined) {
				if (node.prev) {
					node.prev.next = node.next;
					node.next.prev = node.prev;
				} else {
					this.dllTail = node.next;
					node.next.prev = undefined;
				}
				node.prev = this.dllHead;
				this.dllHead.next = node;
				node.next = undefined;
			}

			this.dllHead = node;
		} else {
			if (this.keyMap.size + 1 > this.capacity) {
				let toRemove = this.dllTail;
				this.keyMap.delete(toRemove.key);

				if (this.capacity != 1) {
					toRemove.next!.prev = undefined;
					this.dllTail = toRemove.next!;
				}
			}

			let newNode = {
				prev: this.dllHead,
				next: undefined,
				value,
				key,
			};

			if (this.dllHead) this.dllHead.next = newNode;

			if (this.keyMap.size == 0) this.dllTail = newNode;
			this.dllHead = newNode;

			this.keyMap.set(key, newNode);
		}
	}
}

function printDll(tail: DLLNode) {
	let currentNode: DLLNode | undefined = tail;
	while (currentNode) {
		console.log(currentNode.prev?.value, currentNode.value, currentNode.next?.value);
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
