export function lonelyInteger(a: number[]): number {
  for (let i = 0; i < a.length; i++) {
    const copy = [...a];
    copy.splice(i, 1);
    const repeated = copy.includes(a[i]);
    if (!repeated) return a[i];
  }

  return -1;
}
