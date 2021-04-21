export default function canCompleteCircuit(gas, cost) {
  let candidate = 0;
  let totalGas = 0;
  let candidateTotalGas = 0;

  for (let i = 0; i < gas.length; i++) {
    let curGas = gas[i] - cost[i];
    totalGas += curGas;
    candidateTotalGas += curGas;

    if (candidateTotalGas < 0) {
      candidate = i + 1;
      candidateTotalGas = 0;
    }
  }
  return totalGas >= 0 ? candidate : -1;
};

