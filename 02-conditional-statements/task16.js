function makeupShop(
  renovationPrice,
  powders,
  lipsticks,
  spirals,
  shadows,
  correctors
) {
  const totalCount = powders + lipsticks + spirals + shadows + correctors;
  let totalMoney = 0;

  const powederMoney = powders * 2.6;
  const lipstickMoney = lipsticks * 3;
  const spiralMoney = spirals * 4.1;
  const shadowMoney = shadows * 8.2;
  const correctorMoney = correctors * 2;

  if (totalCount >= 50) {
    totalMoney =
      (powederMoney +
        lipstickMoney +
        spiralMoney +
        shadowMoney +
        correctorMoney) *
      0.75;
  } else {
    totalMoney =
      powederMoney + lipstickMoney + spiralMoney + shadowMoney + correctorMoney;
  }

  totalMoney -= totalMoney * 0.1;

  if (totalMoney > renovationPrice) {
    console.log(
      "Yes! " + (totalMoney - renovationPrice).toFixed(2) + " BGN left."
    );
  } else {
    console.log(
      "Not enough money! " +
        (renovationPrice - totalMoney).toFixed(2) +
        " BGN needed."
    );
  }
}

makeupShop(40.8, 20, 25, 30, 50, 10);
makeupShop(320, 8, 2, 5, 5, 1);
