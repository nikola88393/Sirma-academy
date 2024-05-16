function months(month) {
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      console.log("31 days");
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      console.log("30 days");
      break;
    case 2:
      console.log("28 days");
      break;
    default:
      console.log("Inalid month");
  }
}
months(1);
months(2);
months(4);
months(7);
