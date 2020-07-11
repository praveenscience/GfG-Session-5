const arr = [10, 75, 98, 54];
console.log(arr);
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  // sum = sum + arr[i];
  sum += arr[i];
}
console.log(sum);
console.log(
  arr.reduce(function (a, c) {
    return a + c;
  }, 0)
);
