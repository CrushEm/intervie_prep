export interface Grade{
  student : string, 
  subject: string,
  score: number
}

// Array of grades for students
const grades: Grade[] = [
  { student: "Alice", subject: "Math", score: 85 },
  { student: "Alice", subject: "English", score: 90 },
  { student: "Bob", subject: "Math", score: 75 },
  { student: "Bob", subject: "English", score: 70 },
  { student: "Charlie", subject: "Math", score: 95 },
  { student: "Charlie", subject: "English", score: 100 }
];

// Function to calculate average score per student
function calculateAverageGrades(grades : Grade[]) : {[key:string]: number} {

  //returns {Alice: {total : number, count: number} }
  const totalScores = grades.reduce((acc:{[key: string]: {total : number, count: number}}, grade: Grade) => {

    if (!acc[grade.student]) {
      acc[grade.student] = { total: 0, count: 0 };
    }
    acc[grade.student].total += grade.score;
    acc[grade.student].count += 1;
    return acc;

  }, {});

  const averageScores : {[key:string]: number} = {};
  for (let student in totalScores) {
    averageScores[student] = totalScores[student].total / totalScores[student].count;
  }

  return averageScores;
}

console.log(calculateAverageGrades(grades));