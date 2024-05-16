function excellentRating(rating) {
  if (rating > 5.5) {
    return "Excellent";
  }
}

console.log(excellentRating(6));
console.log(excellentRating(5));
console.log(excellentRating(5.51));
console.log(excellentRating(5.501));
