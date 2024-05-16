function atSea(days, roomType, assessment) {
  let totalPrice = 0;
  if (roomType === "single room") {
    totalPrice = (days - 1) * 25;
  } else if (roomType === "apartment") {
    totalPrice = (days - 1) * 50;
    if (days < 10) {
      totalPrice -= totalPrice * 0.3;
    } else if (days >= 10 || days < 15) {
      totalPrice -= totalPrice * 0.35;
    } else {
      totalPrice -= totalPrice * 0.5;
    }
  } else {
    totalPrice = (days - 1) * 100;
    if (days < 10) {
      totalPrice -= totalPrice * 0.1;
    } else if (days >= 10 && days < 15) {
      totalPrice -= totalPrice * 0.15;
    } else {
      totalPrice -= totalPrice * 0.2;
    }
  }

  if (assessment === "positive") {
    totalPrice += totalPrice * 0.25;
  } else {
    totalPrice -= totalPrice * 0.1;
  }

  console.log(totalPrice.toFixed(2));
}

atSea(11, "apartment", "positive");
atSea(30, "presidential", "negative");
atSea(12, "single room", "positive");
atSea(2, "apartment", "positive");

console.log(2900 - 2900 * 0.2 - (2900 - 2900 * 0.2) * 0.1);
