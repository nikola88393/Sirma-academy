function adventure(right, left) {
  if (right === "sword") {
    if (left === "shield") {
      console.log("Take path tot he castle");
    } else {
      console.log("Take path to the forest");
    }
  } else if (right === "map") {
    if (left === "coins") {
      console.log("Go to town");
    } else {
      console.log("Camp");
    }
  } else {
    console.log("Wander aimlessly");
  }
}

adventure("sword", "shield");
adventure("map", "coins");
adventure("torch", "flower");
adventure("sword", "pouch");
adventure("map", "compass");
