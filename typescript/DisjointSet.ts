class DisjointSet<T> {
  private parent: Map<T, T>;
  private rank: Map<T, number>;
  public size: number;

  constructor(elements: Array<T>) {
    this.parent = new Map<T, T>();
    this.rank = new Map<T, number>();

    for (const element of elements) {
      this.parent.set(element, element);
      this.rank.set(element, 0);
    }

    this.size = elements.length;
  }

  private find(x: T): T {
    if (x === this.parent.get(x)) {
      return x;
    }

    // Path Compression
    this.parent.set(x, this.find(this.parent.get(x)!));
    return this.parent.get(x)!;
  }

  private union(x: T, y: T) {
    // Union with ranking
    if (this.rank.get(x)! < this.rank.get(y)!) {
      this.parent.set(x, y);
    } else if (this.rank.get(x)! > this.rank.get(y)!) {
      this.parent.set(y, x);
    } else {
      this.parent.set(x, y);
      this.rank.set(y, this.rank.get(y)! + 1);
    }
  }

  findAndUnion(x: T, y: T){
    const px = this.find(x);
    const py = this.find(y);

    if(px !== py){
      this.union(px, py);
      this.size--;
    }
  }

}
