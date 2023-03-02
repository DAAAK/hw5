const studentList = [
  {
    firstName: "Allan",
    lastName: "Able",
    scores: [95, 85, 92, 98],
  },
  {
    firstName: "Amy",
    lastName: "Alexander",
    scores: [80, 88, 100],
  },
  {
    firstName: "Betty",
    lastName: "Barns",
    scores: [70, 80, 90, 100],
  },
  {
    firstName: "Bob",
    lastName: "Bones",
    scores: [75, 85, 95, 85],
  },
  {
    firstName: "Cindy",
    lastName: "Chase",
    scores: [95, 90, 92, 98],
  },
  {
    firstName: "Charles",
    lastName: "Chips",
    scores: [88, 99, 90],
  },
];

const cLastNameResults = studentList
  .filter(student => student.lastName.charAt(0) === "C")
  .map(student => {
    const { firstName, lastName, scores } = student;
    const minScore = Math.min(...scores);
    const maxScore = Math.max(...scores);
    const averageScore = parseFloat((scores.reduce((acc, score) => acc + score, 0) / scores.length).toFixed(2));
    return {
      firstName,
      lastName,
      minScore,
      maxScore,
      averageScore,
    };
  });

console.log(cLastNameResults);

