const arrOfObjs = [
  {
    Name: "Kumar",
    Age: 25
  },
  {
    Name: "Praveen Kumar",
    Age: 30
  },
  {
    Name: "Kshitij",
    Age: 20
  },
  {
    Name: "Rashmi",
    Age: 15
  },
  {
    Name: "Flora",
    Age: 20
  }
];

console.log(
  arrOfObjs.map(function (a) {
    return a.Name;
  })
);

console.log(
  arrOfObjs.map(function (a) {
    return a.Age;
  })
);
