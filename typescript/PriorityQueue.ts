export class PriorityQueue<T> {
	private capacity: number;
	private compare: (a: T, b: T) => number;
	private heap: T[];
	private size: number;

	/**
	 * @param capacity  capacity of the priority queue.
	 * @param compare function to compare priority queue values and return: negative (<0), zero (=0), positive (>0)];
	 *        where, negative => prioritize left value; positive => prioritize right value; zero  => prioritize any.
	 */
	constructor(capacity: number, compare: (a: T, b: T) => number) {
		this.capacity = capacity;
		this.compare = compare;
		this.heap = Array(capacity);
		this.size = 0;
	}

	public build(vals: T[]): void {
		this.size = Math.min(vals.length, this.capacity);
		for (let i = 0; i < this.size; i++) {
			this.heap[i] = vals[i];
		}

		if (this.isEmpty()) {
			return;
		}

		for (let i = this.parent(this.size - 1); i >= 0; i--) {
			this.heapify(i);
		}
	}

	public push(val: T): void {
		if (this.isFull()) {
			throw new Error('Priority Queue is already full!');
		}

		this.heap[this.size++] = val;

		let i = this.size - 1;
		while (i) {
			const pi = this.parent(i);
			if (this.compare(this.heap[i], this.heap[pi]) > 0) {
				break;
			}

			this.swap(i, pi);
			i = pi;
		}
	}

	public top(): T {
		return this.heap[0];
	}

	public pop(): T {
		if (this.isEmpty()) {
			throw new Error('Priority Queue is already empty!');
		}

		const val = this.top();

		this.heap[0] = this.heap[--this.size];
		this.heapify(0);

		return val;
	}

	public isEmpty(): boolean {
		return this.size === 0;
	}

	public isFull(): boolean {
		return this.size === this.capacity;
	}

	private parent(x: number): number {
		return (x - 1) >> 1;
	}

	private left(x: number): number {
		return (x << 1) | 1;
	}

	private right(x: number): number {
		return (x + 1) << 1;
	}

	private swap(x: number, y: number): void {
		const temp = this.heap[x];
		this.heap[x] = this.heap[y];
		this.heap[y] = temp;
	}

	private heapify(x: number): void {
		const lx = this.left(x);
		const rx = this.right(x);
		let p0 = x;

		if (lx < this.size && this.compare(this.heap[p0], this.heap[lx]) > 0) {
			p0 = lx;
		}

		if (rx < this.size && this.compare(this.heap[p0], this.heap[rx]) > 0) {
			p0 = rx;
		}

		if (p0 === x) {
			return;
		}

		this.swap(x, p0);
		this.heapify(p0);
	}
}
