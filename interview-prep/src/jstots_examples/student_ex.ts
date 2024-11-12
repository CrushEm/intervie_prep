export interface Scores {
  math: number;
  english: number;
  science: number;
}
export interface Student {
  name: string;
  scores: Scores;
}

// Array of students with their scores in various subjects
const students: Student[] = [
  { name: "Alice", scores: { math: 90, english: 80, science: 85 } },
  { name: "Bob", scores: { math: 70, english: 75, science: 95 } },
  { name: "Charlie", scores: { math: 85, english: 85, science: 80 } },
];

// Function to calculate the average score for each subject
function calculateAverageScores(students: Student[]): {
  [key: string]: Number;
} {
  //Return ex:   Math : { total: number, count, number } }
  const totalScores = students.reduce(
    (
      acc: { [key in keyof Scores]?: { total: number; count: number } },
      student: Student
    ) => {
      for (let subject in student.scores) {
        const key = subject as keyof Scores;

        if (!acc[key]) {
          acc[key] = { total: 0, count: 0 };
        }
        acc[key]!.total += student.scores[key];
        acc[key]!.count += 1;
      }
      return acc;
    },
    {}
  );

  const averageScores: { [key in keyof Scores]: number } = {} as {
    [key in keyof Scores]: number;
  };

  for (let subject in totalScores) {
    const key = subject as keyof Scores;
    averageScores[key] = totalScores[key]!.total / totalScores[key]!.count;
  }

  return averageScores;
}

console.log(calculateAverageScores(students));
