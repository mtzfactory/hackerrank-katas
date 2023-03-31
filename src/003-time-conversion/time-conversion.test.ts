import { timeConversion } from "./time-conversion";

type TestCase = [string, string];

const testCases: TestCase[] = [
  ["12:01:00PM", "12:01:00"],
  ["12:01:00AM", "00:01:00"],
  ["07:05:45PM", "19:05:45"],
];

describe("timeConversion", function () {
  it.each(testCases)('should work for "%s"', function (input, solution) {
    expect(timeConversion(input)).toBe(solution);
  });
});
