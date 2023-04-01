import { lonelyInteger } from "./lonely-integer";

type TestCase = [number[], number];

const testCases: TestCase[] = [
  [[1, 2, 3, 4, 3, 2, 1], 4],
  [[1, 1, 2], 2],
  [[0, 0, 1, 2, 1], 2],
  [[1], 1],
];

describe("lonelyInteger", function () {
  it.each(testCases)("should work for %s", function (a, solution) {
    expect(lonelyInteger(a)).toBe(solution);
  });
});
