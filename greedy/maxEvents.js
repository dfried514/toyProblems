export default function maxEvents(events) {
  events.sort((a, b) => a[1] == b[1] ? a[0] - b[0] : a[1] - b[1]);
  const eventList = [];
  let eventCnt = 0;

  for (let i = 0; i < events.length; i++) {
    for (let j = events[i][0]; j <= events[i][1]; j++) {
        if (!eventList[j]) {
          eventList[j] = true;
          eventCnt++;
          break;
        }
    }
  }
  return eventCnt;
}
