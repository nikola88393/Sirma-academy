function gender(age, gender) {
  if (age <= 16) {
    if (gender === "m") {
      console.log("master");
    } else if (gender === "f") {
      console.log("Miss");
    }
  }
  if (age > 16) {
    if (gender === "m") {
      console.log("Mr");
    } else if (gender === "f") {
      console.log("Mrs");
    }
  }
}

gender(14, "f");
gender(17, "m");
gender(10, "m");
gender(32, "f");
