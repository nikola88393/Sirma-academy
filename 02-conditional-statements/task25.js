function luggage(weight, size) {
  let totalFine = 0;
  if (weight > 50) {
    totalFine += 100;
  }
  if (size > 158) {
    if (size - 158 <= 20) {
      totalFine += 50;
    } else if (size - 158 <= 50) {
      totalFine += 100;
    } else {
      totalFine += 200;
    }
  }
  if (weight > 50 && size > 158) {
    totalFine += 50;
  }

  return totalFine;
}

console.log(luggage(51, 160));
console.log(luggage(48, 180));
console.log(luggage(55, 190));
