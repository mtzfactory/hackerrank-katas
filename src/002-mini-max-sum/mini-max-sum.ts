function getSum(arr: number[], index: number) {
  return arr.reduce(
    (acc, value, idx) => (idx === index ? acc : acc + value),
    0
  );
}

function getMax(arr: number[]) {
  return getSum(arr, 0);
}

function getMin(arr: number[]) {
  return getSum(arr, arr.length - 1);
}

export function miniMaxSum(arr: number[]): void {
  const sorted = [...arr].sort();
  const min = getMin(sorted);
  const max = getMax(sorted);

  console.log(min, max);
}
