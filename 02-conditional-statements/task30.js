function era(year, material) {
  if (year < 0) {
    console.log("Invalid year");
  } else if (year < 500 && material === "stone") {
    console.log("ancient");
  } else if (year <= 1500 && material === "stone") {
    console.log("medieval");
  } else if (year <= 1800 && material === "wood") {
    console.log("colonial");
  } else if (year <= 1900 && material === "steel") {
    console.log("industrial");
  } else if (year > 1900 && material === "steel") {
    console.log("modern");
  } else {
    console.log("Uncertain");
  }
}

era(300, "stone");
era(1500, "wood");
era(1500, "stone");
era(2000, "steel");
era(1100, "wood");
