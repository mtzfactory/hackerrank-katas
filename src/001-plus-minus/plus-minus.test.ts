import { plusMinus } from "./plus-minus";

type TestCase = [number[], string[]];

const testCases: TestCase[] = [
  [
    [1, 1, 0, -1, -1],
    ["0.400000", "0.400000", "0.200000"],
  ],
  [
    [-4, 3, -9, 0, 4, 1],
    ["0.500000", "0.333333", "0.166667"],
  ],
];

describe("plusMinus", function () {
  it.each(testCases)('should work for "%s"', function (input, solution) {
    console.log = jest.fn();

    plusMinus(input);

    expect(console.log).toHaveBeenCalledTimes(solution.length);

    solution.forEach((result, index) =>
      expect(console.log).toHaveBeenNthCalledWith(index + 1, result)
    );
  });
});
