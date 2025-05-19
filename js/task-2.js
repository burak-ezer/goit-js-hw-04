function calcAverageCalories(days) {
  let total = 0;
  for (let calorie of Object.values(days)) {
    total += calorie.calories;
  }
  let end = total/7;
  
  console.log(end);
  return end;
}
