function vegetableMarket(vegetable, day, quntity) {
  if (day === "Saturday" || day === "Sunday") {
    switch (vegetable) {
      case "tomato":
        console.log(2.8 * quntity);
        break;
      case "onion":
        console.log(1.3 * quntity);
        break;
      case "lettuce":
        console.log(0.85 * quntity);
        break;
      case "cucumber":
        console.log(1.75 * quntity);
        break;
      case "pepper":
        console.log(3.5 * quntity);
        break;
      default:
        console.log("invalid vegetable");
    }
  } else {
    switch (vegetable) {
      case "tomato":
        console.log(2.5 * quntity);
        break;
      case "onion":
        console.log(1.2 * quntity);
        break;
      case "lettuce":
        console.log(0.85 * quntity);
        break;
      case "cucumber":
        console.log(1.45 * quntity);
        break;
      case "pepper":
        console.log(5.5 * quntity);
        break;
      default:
        console.log("invalid vegetable");
    }
  }
}

vegetableMarket("tomato", "Tuesday", 2);
vegetableMarket("onion", "Sunday", 3);
vegetableMarket("pepper", "Monday", 10);
vegetableMarket("banana", "Friday", 5);
