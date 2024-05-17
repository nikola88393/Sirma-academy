function climateZone(latitude, hemishpere) {
  if (latitude < -90 || latitude > 90) {
    console.log("Invalid latitude");
  } else if (hemishpere !== "N" || hemishpere !== "S") {
    console.log("Invalid hemisphere");
  } else if (latitude > 66.5) {
    console.log("Arctic Zone");
  } else if (latitude > 23.5) {
    console.log("Temperate zone");
  } else if (latitude > 0) {
    console.log("Tropic zone");
  } else if (latitude === 0) {
    console.log("Equator");
  }
}
