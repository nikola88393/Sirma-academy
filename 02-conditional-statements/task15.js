function holiday(budget, season) {
  if (budget <= 100) {
    console.log("Somewhere in Bulgaria");
    if (season === "summer") {
      console.log("Camping - " + budget * 0.3);
    } else if (season === "winter") {
      console.log("Winter - " + budget * 0.7);
    }
  } else if (budget <= 1000) {
    console.log("Somewhere in Europe");
    if (season === "summer") {
      console.log("Camping - " + budget * 0.4);
    } else if (season === "winter") {
      console.log("Winter - " + budget * 0.8);
    }
  } else {
    console.log("Somewhere in Asia");
    console.log("Hotel - " + budget * 0.9);
  }
}

holiday(50, "summer");
holiday(75, "winter");
holiday(312, "summer");
holiday(678.53, "winter");
holiday(1500, "summer");
