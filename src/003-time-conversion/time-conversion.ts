const time12h = /(0[1-9]|1[0-2]):([0-5][0-9]):([0-5][0-9])([A|P]M)/;

function buildMilitaryTime(h: string, m: string, s: string) {
  return `${h}:${m}:${s}`;
}

function convertAmTime(matches: RegExpMatchArray) {
  return buildMilitaryTime(
    matches[1] === "12" ? "00" : matches[1],
    matches[2],
    matches[3]
  );
}

function convertPmTime(matches: RegExpMatchArray) {
  return buildMilitaryTime(
    matches[1] === "12" ? "12" : (parseInt(matches[1]) + 12).toString(),
    matches[2],
    matches[3]
  );
}

export function timeConversion(time: string): string {
  let militaryTime = time;
  const matches = time12h.exec(time);

  if (matches !== null) {
    const isAM = matches[4] === "AM";

    militaryTime = isAM ? convertAmTime(matches) : convertPmTime(matches);
  }

  return militaryTime;
}
