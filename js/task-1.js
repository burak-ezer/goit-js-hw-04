function isEnoughCapacity(products, containerSize) {
  let total = 0;
  for (const product of Object.values(products)) {
    total += product;
  }
  total<=containerSize ? console.log(true) : console.log(false);
  return total<=containerSize;
}
