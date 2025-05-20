function calcAverageCalories(days) {
  let total = 0;
  let average = 0;
  for (const day of days) {
    total += day.calories;
  }
  average = total / days.length;
  if (days.length) {
    console.log(average);
    return average;
  } else {
    console.log(0);
    return 0;
  }
}
