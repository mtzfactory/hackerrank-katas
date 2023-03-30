import { miniMaxSum } from "./mini-max-sum";

type TestCase = [number[], number[]];

const testCases: TestCase[] = [
  [
    [1, 3, 5, 7, 9],
    [16, 24],
  ],
  [
    [1, 2, 3, 4, 5],
    [10, 14],
  ],
];

describe("miniMaxSum", function () {
  it.each(testCases)('should work for "%s"', function (input, solution) {
    console.log = jest.fn();

    miniMaxSum(input);

    expect(console.log).toHaveBeenCalledWith(...solution);
  });
});
