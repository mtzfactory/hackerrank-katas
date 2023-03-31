const commandRegex = /(C|S);(C|M|V);([\w+\s*]*)(?:\(\))?/;

const toPascalCase = (str: string) =>
  str.replace(/(?:\b\w)/g, (word) => word.toUpperCase()).replace(/\s+/g, "");

const toCamelCase = (str: string) =>
  str
    .replace(/(?:\b\w)/g, (word, index) =>
      index == 0 ? word.toLowerCase() : word.toUpperCase()
    )
    .replace(/\s+/g, "");

const camelCaseToWords = (str: string) =>
  str
    .replace(/([A-Z])/g, " $1")
    .trim()
    .toLowerCase();

const toClassName = (str: string, category: string) =>
  category === "C" ? toPascalCase(str) : str;

const toMethodName = (str: string, category: string) =>
  category === "M" ? `${toCamelCase(str)}()` : str;

const toVariableName = (str: string, category: string) =>
  category === "V" ? toCamelCase(str) : str;

const combineCategories =
  (...fns: ((initialVal: string, category: string) => string)[]) =>
  (initialVal: string, category: string) =>
    fns.reduceRight((val, fn) => fn(val, category), initialVal);

const toCategoryName = combineCategories(
  toClassName,
  toMethodName,
  toVariableName
);

const splitName = (str: string, command: string) =>
  command === "S" ? camelCaseToWords(str) : str;

const combineName = (str: string, command: string, category: string) =>
  command === "C" ? toCategoryName(str, category) : str;

export function camelCase(input: string): string {
  const commands = input.match(commandRegex);

  if (!commands) return "No commands supplied!";

  const command = commands[1];
  const category = commands[2];
  const payload = commands[3];

  return combineName(splitName(payload, command), command, category);
}
