import PriorityQueue from '../priorityQueue/priorityQueue.js';

export default function minMeetingRooms(intervals) {
    // sort intervals by start in ascending order
    // initialize priority queue, sorted by end in ascdending order
    // initialize rooms variable
    // iterate over intervals
    //    if priority queue is empty or head end > cur start
    //        inc rooms
    //    else dequeue
    //    enqueue cur
    // return rooms
    intervals.sort((a, b) => a[0] == b[0] ? a[1] - b[1] : a[0] - b[0]);

    const comparator = (a, b, array) => array[a][1] == array[b][1]
      ? array[a][0] - array[b][0] : array[a][1] - array[b][1];
    const pq = new PriorityQueue(comparator);
    let rooms = 0;
    intervals.forEach(x => {
      if (!pq.head() || pq.head()[1] > x[0])
        rooms++;
      else
        pq.dequeue();
      pq.enqueue(x);
    });
    return rooms;
}

