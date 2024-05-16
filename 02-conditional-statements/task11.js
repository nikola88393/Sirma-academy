function grocery(product, city, quantity) {
  if (city === "Sofia") {
    switch (product) {
      case "tea":
        return (0.5 * quantity).toFixed(2);
      case "water":
        return (0.8 * quantity).toFixed(2);
      case "juice":
        return (1.2 * quantity).toFixed(2);
      case "sweets":
        return (1.45 * quantity).toFixed(2);
      case "chips":
        return (1.6 * quantity).toFixed(2);
      default:
        return "invalid product";
    }
  }
  if (city === "Sofia") {
    switch (product) {
      case "tea":
        return (0.5 * quantity).toFixed(2);
      case "water":
        return (0.8 * quantity).toFixed(2);
      case "juice":
        return (1.2 * quantity).toFixed(2);
      case "sweets":
        return (1.45 * quantity).toFixed(2);
      case "chips":
        return (1.6 * quantity).toFixed(2);
      default:
        return "invalid product";
    }
  } else if (city === "Plovdiv") {
    switch (product) {
      case "tea":
        return (0.4 * quantity).toFixed(2);
      case "water":
        return (0.7 * quantity).toFixed(2);
      case "juice":
        return (1.15 * quantity).toFixed(2);
      case "sweets":
        return (1.3 * quantity).toFixed(2);
      case "chips":
        return (1.5 * quantity).toFixed(2);
      default:
        return "invalid product";
    }
  } else if (city === "Varna") {
    switch (product) {
      case "tea":
        return (0.45 * quantity).toFixed(2);
      case "water":
        return (0.7 * quantity).toFixed(2);
      case "juice":
        return (1.15 * quantity).toFixed(2);
      case "sweets":
        return (1.3 * quantity).toFixed(2);
      case "chips":
        return (1.5 * quantity).toFixed(2);
      default:
        return "invalid product";
    }
  } else {
    return "invalid city";
  }
}

console.log(grocery("tea", "Varna", 2));
console.log(grocery("chips", "Plovdiv", 1));
console.log(grocery("juice", "Sofia", 6));
console.log(grocery("sweets", "Plovdiv", 1));
