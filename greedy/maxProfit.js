export default function maxProfit(inventory, orders) {
  function MaxHeap() {
    this._heap = [];
  }
  MaxHeap.prototype.swap = function(a, b) {
    [this._heap[a], this._heap[b]] = [this._heap[b], this._heap[a]];
  }
  MaxHeap.prototype.left = function(index) {
    return 1 + (2 * index);
  }
  MaxHeap.prototype.right = function(index) {
    return 2 + (2 * index);
  }
  MaxHeap.prototype.parent = function(index) {
    return Math.ceil(index / 2) - 1;
  }
  MaxHeap.prototype.heapify = function(index) {
    const leftIndex = this.left(index);
    const rightIndex = this.right(index);
    let biggest = index;

    if (this._heap[leftIndex] && this._heap[leftIndex] >= this._heap[biggest])
      biggest = leftIndex;

    if (this._heap[rightIndex] && this._heap[rightIndex] >= this._heap[biggest])
      biggest = rightIndex;

    if (biggest !== index) {
      this.swap(biggest, index);
      this.heapify(biggest);
    }
  }
  MaxHeap.prototype.extractMax = function() {
    if (this._heap.length === 0) {
      throw Error('Heap is empty!');
    }
    if (this._heap.length === 1) {
      return this._heap.pop();
    }
    const max = this._heap[0];

    this._heap[0] = this._heap.pop();
    this.heapify(0);

    return max;
  }
  MaxHeap.prototype.getMax = function() {
    const max = this.extractMax();
    if (max > 0)
      this.insert(max - 1);
    return max;
  }
  MaxHeap.prototype.increaseKey = function(index, key) {
    this._heap[index] = key;

    while (index > 0
      && this._heap[this.parent(index)] < this._heap[index]) {
        let curParent = this.parent(index);

        this.swap(index, curParent);
        index = curParent;
    }
  }
  MaxHeap.prototype.insert = function(key) {
    this._heap.push(-Infinity);
    this.increaseKey(this._heap.length - 1, key);
  }
  let res = 0;
  const heap = new MaxHeap();

  inventory.forEach(x => heap.insert(x));
  for (let i = 1; i <= orders; i++) {
    const val = heap.getMax();

    if (val == 0)
      break;
    res += val;
  }
  return res % (10 ** 9 + 7);
}
