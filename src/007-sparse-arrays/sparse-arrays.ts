/*
 * Complete the 'matchingStrings' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY strings
 *  2. STRING_ARRAY queries
 */
export function matchingStrings(
  strings: string[],
  queries: string[]
): number[] {
  const result: number[] = [];

  queries.forEach((query) =>
    result.push(strings.filter((string) => string === query).length)
  );

  return result;
}
