function range(start, end, step = 1) {
  let list = [];
  let range = end - start;
  if (range > 0) {
    for (i = start; i <= end; i += step) {
      list.push(i);
    }
  }
  else if (range < 0) {
    if (step === 1) {
      step = -1;
    }
    for (i = start; i >= end; i += step) {
      list.push(i);
    }
  }
  return list;
}

function sum(numbers) {
  let sum = 0;
  for (i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

// tests
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55