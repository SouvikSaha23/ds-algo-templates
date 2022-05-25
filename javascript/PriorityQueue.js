export class PriorityQueue {
    /**
     * @param capacity  capacity of the priority queue.
     * @param compare function to compare priority queue values and return: negative (<0), zero (=0), positive (>0)];
     *        where, negative => prioritize left value; positive => prioritize right value; zero  => prioritize any.
     */
    constructor(capacity, compare) {
        this.capacity = capacity;
        this.compare = compare;
        this.heap = Array(capacity);
        this.size = 0;
    }
    build(vals) {
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
    push(val) {
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
    top() {
        return this.heap[0];
    }
    pop() {
        if (this.isEmpty()) {
            throw new Error('Priority Queue is already empty!');
        }
        const val = this.top();
        this.heap[0] = this.heap[--this.size];
        this.heapify(0);
        return val;
    }
    isEmpty() {
        return this.size === 0;
    }
    isFull() {
        return this.size === this.capacity;
    }
    parent(x) {
        return (x - 1) >> 1;
    }
    left(x) {
        return (x << 1) | 1;
    }
    right(x) {
        return (x + 1) << 1;
    }
    swap(x, y) {
        const temp = this.heap[x];
        this.heap[x] = this.heap[y];
        this.heap[y] = temp;
    }
    heapify(x) {
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
