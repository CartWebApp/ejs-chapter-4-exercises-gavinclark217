function reverseArray(arr) {
  len = arr.length;
  for (let i = len - 1; i >= 0; i--) {
    arr.push(arr[i]);
  }
  for (let j = 0; j < len; j++) {
    arr.shift();
  }
  return arr;
}

function reverseArrayInPlace(arr) {
  let temp = 0;
  let len = arr.length - 1;
  for ( let i = 0; i < Math.floor(arr.length / 2); i++) {
    temp = arr[i];
    arr[i] = arr[len - i];
    arr[len - i] = temp;
  }
  return arr;
}






// tests 
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]