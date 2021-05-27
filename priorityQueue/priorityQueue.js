export default class PriorityQueue {
  constructor(comparator) {
    this.data = [];
    this.compare = comparator;
  }
  enqueue(val) {
    this.data.push(val);

    let child = this.data.length - 1;
    let parent = Math.floor((child - 1) / 2);

    while (parent >= 0) {
      if (this.compare(parent, child, this.data) <= 0)
        break;
      [this.data[child], this.data[parent]] = [this.data[parent], this.data[child]];
      child = parent;
      parent = Math.floor((child - 1) / 2);
    }
  }
  dequeue() {
    if (this.data.length == 0) return null;
    if (this.data.length == 1) return this.data.pop();
    const res = this.data[0];

    this.data[0] = this.data.pop();

    let min = 0;
    let cur = 0;

    while (true) {
      const left = (cur * 2) + 1;
      const right = (cur * 2) + 2;

      if (this.data[left] && this.compare(left, cur, this.data) <= 0)
        min = left;
      if (this.data[right] && this.compare(right, min, this.data) <= 0)
        min = right;
      if (min == cur)
        break;
      [this.data[cur], this.data[min]] = [this.data[min], this.data[cur]];
      cur = min;
    }
    return res;
  }
  head() {
    return this.data[0];
  }
}
