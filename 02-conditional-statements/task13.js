function calculator(x, y, operation) {
  switch (operation) {
    case "add":
      console.log(x + y);
      break;
    case "subtract":
      console.log(x - y);
      break;
    case "divide":
      if (y != 0) {
        console.log(x / y);
      } else {
        console.log("cannot divide to 0");
      }
      break;
    case "multiply":
      console.log((x * y).toFixed(2));
      break;
    default:
      "invalid opertaion";
  }
}

calculator(5, 5, "add");
calculator(10, 12, "subtract");
calculator(9, 3, "divide");
calculator(5, 2, "divide");
calculator(3.1, 0.1, "multiply");
