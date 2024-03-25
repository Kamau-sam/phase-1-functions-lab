let blockNo = 42;
function distanceFromHqInBlocks(blockNo) {
  if (blockNo > 42) {
    return blockNo - 42;
  } else {
    return 42 - blockNo;
  }
}
function distanceFromHqInFeet(blockNo) {
  return distanceFromHqInBlocks(blockNo) * 264;
}
function distanceTravelledInFeet(start, destination) {
  if (start < destination) {
    return (destination - start) * 264;
  } else {
    return (start - destination) * 264;
  }
}
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400) {
    return 0;
  }
  if (distance > 400 && distance <= 2000) {
    return 0.02 * (distance - 400);
  }
  if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
