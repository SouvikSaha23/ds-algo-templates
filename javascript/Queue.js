export class Queue {
	constructor(cap) {
		this.q = new Array(cap);
		this.front = 0;
		this.rear = cap - 1;
		this.cap = cap;
		this.size = 0;
	}
	push(val) {
		if (this.size === this.cap) {
			throw new Error('Queue is full!');
		}
		this.rear = (this.rear + 1) % this.cap;
		this.q[this.rear] = val;
		this.size++;
	}
	isEmpty() {
		return this.size === 0;
	}
	pop() {
		if (this.isEmpty()) {
			throw new Error('Queue is empty!');
		}
		const val = this.q[this.front];
		this.front = (this.front + 1) % this.cap;
		this.size--;
		return val;
	}
}
