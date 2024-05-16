function movie(age) {
  if (age < 0 || age > 110) {
    console.log("Invalid age");
  } else if (age < 13) {
    console.log("U-rated");
  } else if (age >= 13 && age <= 17) {
    console.log("U and PG-13");
  } else {
    console.log("All movies");
  }
}

movie(10);
movie(16);
movie(21);
