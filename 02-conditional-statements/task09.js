function alarm(hours, mins) {
  let m = mins + 15;
  let h = hours;
  if (m > 59) {
    h += 1;
    if (h === 24) {
      h = 0;
    }
    m = m % 60;
  }
  if (m < 10) {
    console.log(h + ":0" + m);
  } else {
    console.log(h + ":" + m);
  }
}

alarm(1, 47);
alarm(0, 2);
alarm(23, 59);
alarm(11, 7);
alarm(12, 48);
