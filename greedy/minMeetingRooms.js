export default function minMeetingRooms(intervals) {
  const startTimes = [];
  const endTimes = [];

  for (const interval of intervals) {
    startTimes.push(interval[0]);
    endTimes.push(interval[1]);
  }
  startTimes.sort((a, b) => a - b);
  endTimes.sort((a, b) => a - b);

  let endPtr = 0;
  let roomCnt = 0;

  for (let i = 0; i < startTimes.length; i++) {
    if (startTimes[i] < endTimes[endPtr])
      roomCnt++;
    else
      endPtr++;
  }
  return roomCnt;
}
