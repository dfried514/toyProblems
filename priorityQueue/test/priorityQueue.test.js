import PriorityQueue from '../priorityQueue.js';

describe('priorityQueue', () => {
  test('priorityQueue', () => {
    const comparator = (a, b, array) => array[a] - array[b];
    const pq = new PriorityQueue(comparator);
    const arr = [14, 5, 2, -1];

    arr.forEach(x => pq.enqueue(x));
    expect(pq.data).toStrictEqual([-1, 2, 5, 14]);
  });
  test('priorityQueue', () => {
    const minFn = (a, b, array) => array[a] - array[b];
    const pq = new PriorityQueue(minFn);
    const arr = [14, 5, 9, 22, 2, 4];

    arr.forEach(x => pq.enqueue(x));
    expect(pq.data).toStrictEqual([2, 5, 4, 22, 14, 9]);
  });
  test('priorityQueue', () => {
    const minFn = (a, b, array) => array[a] - array[b];
    const pq = new PriorityQueue(minFn);
    const arr = [14, 5, 9, 22, 2, 4];

    arr.forEach(x => pq.enqueue(x));
    pq.dequeue();
    expect(pq.data).toStrictEqual([4, 5, 9, 22, 14]);
  });
  test('priorityQueue', () => {
    const minFn = (a, b, array) => array[a] - array[b];
    const pq = new PriorityQueue(minFn);
    const arr = [4, 5, 9, 22, 14];

    arr.forEach(x => pq.enqueue(x));
    pq.dequeue();
    expect(pq.data).toStrictEqual([5, 14, 9, 22]);
  });
  test('priorityQueue', () => {
    const minFn = (a, b, array) => array[a] - array[b];
    const pq = new PriorityQueue(minFn);
    const arr = [4, 5, 5, 9, 22, 14];

    arr.forEach(x => pq.enqueue(x));
    pq.dequeue();
    expect(pq.data).toStrictEqual([5, 9, 5, 14, 22]);
  });
});
