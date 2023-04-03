export function gradingStudents(grades: number[]): number[] {
  return grades.map((grade) => {
    if (grade < 38) return grade;

    const next5 = Math.ceil(grade / 5) * 5;

    return next5 - grade < 3 ? next5 : grade;
  });
}
