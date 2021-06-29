export default function maxArea(height) {
  // create local vars L, R, ptr, res
  // res = min height between l and r times r - 1
  // determine min height between L and R
  // move from min height towards other with ptr, while less than min height
  // when run into >= height, compute area and compare with largestArea
  // return largestArea
  let ptr;
  let l = 0;
  let r = height.length - 1;
  let res = 0;

  while (l < r) {
    if (height[l] <= height[r]) {
      res = Math.max(res, (r - l) * height[l]);
      ptr = l + 1;

      while (height[ptr] < height[l])
        ptr++;
      l = ptr;
    } else {
      res = Math.max(res, (r - l) * height[r]);
      ptr = r - 1;

      while (height[ptr] < height[r])
        ptr--;
      r = ptr;
    }
  }
  return res;
}
