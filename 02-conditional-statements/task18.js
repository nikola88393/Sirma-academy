function grade(score) {
  if (score < 0 || score > 100) {
    return "Invalid score";
  }
  if (score < 60) {
    return "F";
  } else if (score < 70) {
    return "D";
  } else if (score < 80) {
    return "C";
  } else if (score < 90) {
    return "B";
  } else {
    return "A";
  }
}

console.log(grade(95));
console.log(grade(82));
console.log(grade(76));
console.log(grade(65));
console.log(grade(45));
