export function breakingRecords(scores: number[]): number[] {
  const min = [scores[0]];
  const max = [scores[0]];

  scores.forEach((score) => {
    if (score < min[min.length - 1]) min.push(score);
    if (score > max[max.length - 1]) max.push(score);
  });

  return [max.length - 1, min.length - 1];
}
