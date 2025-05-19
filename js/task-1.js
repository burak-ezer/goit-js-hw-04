function isEnoughCapacity(products, containerSize) {
  let total = 0;
  for (let product of Object.values(products)) {
    total += product;
  }

  if (total <= containerSize) {
    
    console.log(true);
    return true;
  } else {
    
    console.log(false);
    return false;
  }
}
