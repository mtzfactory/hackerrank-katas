import { breakingRecords } from "./breaking-the-records";

type TestCase = [number[], number[]];

const testCases: TestCase[] = [
  [
    [12, 24, 10, 12],
    [1, 1],
  ],
  [
    [10, 5, 20, 20, 4, 5, 2, 25, 1],
    [2, 4],
  ],
];

describe("breakingRecords", function () {
  it.each(testCases)('should work for "%s"', function (input, solution) {
    expect(breakingRecords(input)).toStrictEqual(solution);
  });
});
