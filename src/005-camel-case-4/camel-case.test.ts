import { camelCase } from "./camel-case";

type TestCase = [string, string];

const testCases: TestCase[] = [
  ["S;M;plasticCup()", "plastic cup"],
  ["C;V;mobile phone", "mobilePhone"],
  ["C;C;coffee machine", "CoffeeMachine"],
  ["S;C;LargeSoftwareBook", "large software book"],
  ["C;M;white sheet of paper", "whiteSheetOfPaper()"],
  ["S;V;pictureFrame", "picture frame"],
  ["S;V;iPad", "i pad"],
  ["C;M;mouse pad", "mousePad()"],
  ["C;C;code swarm", "CodeSwarm"],
  ["S;C;OrangeHighlighter", "orange highlighter"],
];

describe("camelCase", function () {
  it.each(testCases)('should work for "%s"', function (input, solution) {
    expect(camelCase(input)).toBe(solution);
  });
});
