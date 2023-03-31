import { matchingStrings } from "./sparse-arrays";

type TestCase = [string[], string[], number[]];

const testCases: TestCase[] = [
  [
    ["aba", "baba", "aba", "xzxb"],
    ["aba", "xzxb", "ab"],
    [2, 1, 0],
  ],
  [
    ["def", "de", "fgh"],
    ["de", "lmn", "fgh"],
    [1, 0, 1],
  ],
  [
    [
      "abcde",
      "sdaklfj",
      "asdjf",
      "na",
      "basdn",
      "sdaklfj",
      "asdjf",
      "na",
      "asdjf",
      "na",
      "basdn",
      "sdaklfj",
      "asdjf",
    ],
    ["abcde", "sdaklfj", "asdjf", "na", "basdn"],
    [1, 3, 4, 3, 2],
  ],
];

describe("matchingStrings", function () {
  it.each(testCases)(
    'ould work for strings = "%s" and queries = "%s"',
    function (strings, queries, solution) {
      expect(matchingStrings(strings, queries)).toStrictEqual(solution);
    }
  );
});
