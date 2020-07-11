const fns = [
  function () {
    return "Kranti";
  },
  function () {
    return 9 * 9;
  },
  function () {
    return Math.PI;
  }
];
console.log(fns);
console.log(
  fns.map(function (a) {
    return a();
  })
);
