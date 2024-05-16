function ticket(age) {
  if (age < 0 || age > 110) {
    return "invalid age";
  } else if (age < 12) {
    return "5$";
  } else if (age < 19) {
    return "8$";
  } else {
    return "10$";
  }
}

console.log(ticket(10));
console.log(ticket(16));
console.log(ticket(25));
console.log(ticket(13));
