function isEnoughCapacity(products, containerSize) {
  let total = 0;
  for (let product of Object.values(products)) {
    total += product;
  }

  if (total < containerSize) {
    return true;
    console.log(true);
  } else {
    return false;
    console.log(false);
  }
}
