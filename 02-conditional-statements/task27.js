function potion(ingr1, ingr2) {
  if (ingr1 === "herbs") {
    if (ingr2 === "water") {
      console.log("healt potion");
    } else if (ingr2 === "oil") {
      console.log("stealth potion");
    } else {
      console.log("munor stamina potion");
    }
  } else if (ingr1 === "berries") {
    if (ingr2 === "sugar") {
      console.log("speed potion");
    } else {
      console.log("minor energy potion");
    }
  } else {
    console.log("no potion");
  }
}

potion("herbs", "water");
potion("herbs", "oil");
potion("herbs", "banana");
potion("berries", "sugar");
potion("berries", "banana");
potion("herbs", "sugar");
potion("sugar", "salt");
