console.clear();
const obj = {
  Name: "GfG",
  Students: ["Rohith", "Rohit", "Flora", "Bharath", "Rashmi", "Kumar"],
  Hello: {},
  TellNumOfStudents: function () {
    return this.Students.length;
  }
};
console.log(obj);
console.log(Object.keys(obj));
for (let i = 0; i < Object.keys(obj).length; i++) {
  console.log(typeof obj[Object.keys(obj)[i]]);
  console.log(Array.isArray(obj[Object.keys(obj)[i]]));
}
console.log(Object.values(obj));
