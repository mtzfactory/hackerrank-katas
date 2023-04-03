import { gradingStudents } from "./grading-students";

type TestCase = [number[], number[]];

const testCases: TestCase[] = [
  [
    [84, 29, 57],
    [85, 29, 57],
  ],
  [
    [73, 67, 38, 33],
    [75, 67, 40, 33],
  ],
];

describe("gradingStudents", function () {
  it.each(testCases)("should work for %s", function (grades, solution) {
    expect(gradingStudents(grades)).toStrictEqual(solution);
  });
});
