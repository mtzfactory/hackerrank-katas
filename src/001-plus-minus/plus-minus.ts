function printSixDigits(n: number) {
  console.log(n.toFixed(6));
}

export function plusMinus(arr: number[]): void {
  const numbers = arr.length;
  let positive = 0;
  let negative = 0;
  let zero = 0;

  arr.forEach((number) => {
    if (number > 0) positive++;
    if (number < 0) negative++;
    if (number === 0) zero++;
  });

  printSixDigits(positive / numbers);
  printSixDigits(negative / numbers);
  printSixDigits(zero / numbers);
}
