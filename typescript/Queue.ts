export class Queue<T> {
  private capacity: number;
  private q: Array<T>;
  private front: number;
  public size: number;

  /**
   * @param cap capacity of Queue
   */
  constructor(cap: number = 5000){
    this.capacity = cap;
    this.q = new Array<T>(cap);
    this.front = 0;
    this.size = 0;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  push(val: T) {
    if(this.size === this.capacity){
      throw new Error("Queue is full!");
    }

    const rear = (this.front + this.size) % this.capacity ;
    this.size++;
    this.q[rear] = val;
  }

  pop(): T {
    if(this.isEmpty()){
      throw new Error("Queue is empty!");
    }

    const val = this.q[this.front];
    this.front++;
    this.size--;
    return val;
  }
}
