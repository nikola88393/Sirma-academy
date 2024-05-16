function speed(x) {
  if (x < 1) {
    console.log("invalid");
  } else if (x <= 10) {
    console.log("slow");
  } else if (x <= 60) {
    console.log("average");
  } else if (x <= 120) {
    console.log("fast");
  } else if (x <= 160) {
    console.log("super-fast");
  } else {
    console.log("turbo fast!");
  }
}

speed(-1);
speed(10);
speed(59);
speed(120);
speed(121);
speed(183);
speed(59.99);
speed(60.001);
