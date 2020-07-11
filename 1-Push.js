const arr = [
  "GeeksforGeeks", // String
  5, // Number
  true, // Boolean
  [7.5, 833846416845616815161615n], // An Array
  {
    Name: "Rohit",
    Age: 25n
  }, // Object
  function () {
    // Function
    return "Hello!";
  },
  undefined,
  null
];
const todo = ["Milk", "Cheese"];
todo.push("Bread");
console.log(todo);
console.log("Adding bread using push at the end: " + todo.push("Bread"));
console.log(todo);
console.log("Removing the last element using pop: " + todo.pop());
console.log(todo);
console.log(
  "Adding bread using unshift at the beginning: " + todo.unshift("Bread")
);
console.log(todo);
console.log("Removing the first element using shift: " + todo.shift());
console.log(todo);
