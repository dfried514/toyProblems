import PriorityQueue from '../priorityQueue/priorityQueue.js';

function Interval(start, end) {
  this.start = start;
  this.end = end;
};

export default function employeeFreeTime(schedule) {
    // create pq, comparator is non-decreasing starting times of Interval objects
    //iterate over input,
    // add input to pq as array tuples
    // deq firstInterval
    // init startTime of first freeTime interval as end time of firstInterval
    // while pq has more intervals
    //    deq nextInterval
    //    while nextInterval start equals curInterval
    //      change freeTimeStart to max of freeTimeStart and nextTimeEnd
    //    if startTime of nextInterval is less than or equal to StartTime of FT
    //      change startTime of FT to max of startTime of FT and endTime of next
    //    else
    //      push interval of startTime of FT and startTime of next
    //      freeTime start time is end of nextInterval
    //    curInterval is equal to nextInterval
    // return res
    // NOTE:  since I didn't need to dequeue and then enqueue, PQ UNNECESSARY
    const compare = (a, b, array) => array[a][0] == array[b][0]
      ? array[a][1] - array[b][1] : array[a][0] - array[b][0];

    const pq = new PriorityQueue(compare);
    schedule.forEach(x => x.forEach(interval => {
      if (interval instanceof Interval)
        pq.enqueue([interval.start, interval.end]);
      else
        pq.enqueue(interval);
    }));
    if (!pq.head()) return [];
    const res = [];

    let curInterval = pq.dequeue();
    let freeTimeStart = curInterval[1];

    while (pq.head()) {
      let nextInterval = pq.dequeue();

      while (nextInterval[0] == curInterval[0]) {
        freeTimeStart = Math.max(freeTimeStart, nextInterval[1]);
        if (pq.head())
            nextInterval = pq.dequeue();
        else
            return res;
      }
      if (nextInterval[0] <= freeTimeStart) {
        freeTimeStart = Math.max(freeTimeStart, nextInterval[1]);
      }
      else {
        res.push([freeTimeStart, nextInterval[0]]);
        freeTimeStart = nextInterval[1];
      }
      curInterval = nextInterval;
    }
    return res;
}

