function discount(age, membership) {
  if (age < 18) {
    console.log("10%");
  } else if (age >= 18 && age <= 64) {
    if (membership === "Yes") {
      console.log("20%");
    } else {
      console.log("10%");
    }
  } else {
    console.log("30%");
  }
}

discount(20, "Yes");
discount(15, "No");
discount(70, "No");
