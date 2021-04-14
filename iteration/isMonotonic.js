export default function isMonotonic(A) {
  if (A.length == 0) return true;
  let nonDecreasing;
  let idx = 1;

  while (idx < A.length && A[idx] == A[idx - 1]) {
    idx++;
  }
  if (idx == A.length)
    return true;
  nonDecreasing = A[idx] > A[idx - 1];

  if (nonDecreasing) {
    while (idx < A.length && A[idx] >= A[idx - 1]) {
      idx++;
    }
  } else {
    while (idx < A.length && A[idx] <= A[idx - 1]) {
      idx++;
    }
  }
  return idx == A.length;
};
