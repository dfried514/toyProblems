export default function jump2(nums) {
  if (nums.length <= 1) return 0;
  let jumps = 0;
  let idx = 0;

  while (true) {
    console.log('idx', idx);
    let bestJump = -Infinity;
    let bestIdx = idx;

    for (let i = 1; i <= nums[idx]; i++) {
      if (idx + i == nums.length - 1)
        return jumps + 1;
      if (idx + i + nums[idx + i] > bestJump) {
        bestJump = idx + i + nums[idx + i];
        bestIdx = idx + i;
      }
    }
    idx = bestIdx;
    jumps++;
  }
}
