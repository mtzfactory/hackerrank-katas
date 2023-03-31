import { divisibleSumPairs } from "./divisible-sum-pairs";

type TestCase = [number, number, number[], number];

const testCases: TestCase[] = [
  [6, 5, [1, 2, 3, 4, 5, 6], 3],
  [6, 3, [1, 3, 2, 6, 1, 2], 5],
  [
    100,
    21,
    [
      64, 95, 76, 35, 83, 2, 97, 21, 26, 6, 20, 98, 100, 79, 84, 40, 62, 62, 20,
      9, 87, 40, 47, 38, 12, 10, 92, 68, 4, 34, 98, 53, 15, 4, 9, 4, 77, 60, 36,
      49, 10, 73, 56, 43, 31, 6, 18, 91, 53, 73, 28, 90, 79, 3, 72, 64, 29, 89,
      95, 28, 23, 7, 54, 23, 34, 90, 100, 73, 77, 98, 95, 89, 22, 42, 98, 39,
      92, 25, 44, 40, 7, 100, 62, 28, 25, 21, 64, 55, 84, 54, 99, 14, 5, 51, 34,
      66, 4, 5, 49, 56,
    ],
    254,
  ],
];

describe("divisibleSumPairs", function () {
  it.each(testCases)(
    'should work for n = "%s", k = "%s" and arr = "%s"',
    function (n, k, arr, solution) {
      expect(divisibleSumPairs(n, k, arr)).toBe(solution);
    }
  );
});
