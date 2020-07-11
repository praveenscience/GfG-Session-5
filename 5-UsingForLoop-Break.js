const Students = ["Vidhyasagar", "Flora", "Rohit", "Kumar"];

function askAttendance(Student) {
  console.log("Hey, " + Student + "! Are you present today?");
}

for (let i = 0; i < Students.length; i++) {
  if (i == 3) {
    break;
  }
  askAttendance(Students[i]);
}
