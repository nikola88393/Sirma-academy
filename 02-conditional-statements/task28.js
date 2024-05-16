function survival(day, env, items) {
  if (day === "day") {
    if (env === "forest") {
      if (items === "knife") {
        console.log("hunt for food");
      } else if (items === "container") {
        console.log("collect berries");
      } else {
        console.log("explore");
      }
    }
    if (env === "desert") {
      if (items === "hat") {
        console.log("search for water");
      } else {
        console.log("find shade");
      }
    }
  }
  if (day === "night") {
    if (env === "forest") {
      if (items === "firestarter") {
        console.log("make campfire");
      } else {
        console.log("climb a tree");
      }
    }
    if (env === "desert") {
      if (items === "blanket") {
        console.log("sleep");
      } else {
        console.log("Keep moving");
      }
    }
  }
}

survival("day", "forest", "knife");
survival("day", "forest", "container");
survival("night", "forest", "firestarter");
survival("day", "forest", "bag");
survival("night", "desert", "blanket");
survival("day", "desert", "hat");
survival("night", "desert", "sword");
survival("night", "forest", "hat");
