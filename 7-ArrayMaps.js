const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(nums);
console.log(
  nums
    .map(function (n) {
      console.log("Pushing something...");
      nums.push(10 + n);
      return `The square of ${n} is ${n * n}`;
    })
    .join("\n")
);
console.log(nums);
