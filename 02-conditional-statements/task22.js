function university(score, extra) {
  if (score >= 90) {
    console.log("admitted");
  } else if (score < 90 && score >= 80 && extra >= 2) {
    console.log("admitted");
  } else {
    console.log("not admitted");
  }
}

university(85, 3);
university(88, 1);
university(91, 0);
university(75, 12);
