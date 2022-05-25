export class Queue<T> {
	private q: T[];
	private front: number;
	private rear: number;
	private cap: number;
	private size: number;

	/**
	 * @param cap capacity of Queue
	 */
	constructor(cap: number) {
		this.q = new Array<T>(cap);
		this.front = 0;
		this.rear = cap - 1;
		this.cap = cap;
		this.size = 0;
	}

	public push(val: T): void {
		if (this.size === this.cap) {
			throw new Error('Queue is full!');
		}
		this.rear = (this.rear + 1) % this.cap;
		this.q[this.rear] = val;
		this.size++;
	}

	public isEmpty(): boolean {
		return this.size === 0;
	}

	public pop(): T {
		if (this.isEmpty()) {
			throw new Error('Queue is empty!');
		}
		const val = this.q[this.front];
		this.front = (this.front + 1) % this.cap;
		this.size--;
		return val;
	}
}
