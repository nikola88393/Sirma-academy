function area(figure, x, y) {
  if (figure === "square") {
    return x * x;
  } else if (figure === "rectangle") {
    return x * y;
  } else if (figure === "triangle") {
    return (x * y) / 2;
  } else if (figure === "circle") {
    return (x * x * Math.PI).toFixed(2);
  } else {
    return "unknown figure";
  }
}
console.log(area("square", 5));
console.log(area("rectangle", 10, 3.5));
console.log(area("triangle", 4.5, 20));
console.log(area("circle", 10));
