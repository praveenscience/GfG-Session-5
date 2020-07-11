const Students = ["Vidhyasagar", "Flora", "Rohit", "Kumar"];

function askAttendance(caller, Student, callBackfunction) {
  console.log(caller + " " + Student + "! Are you present today?");
  callBackfunction();
}

Students.forEach(function (std) {
  const caller = "Hey";
  askAttendance(caller, std, function () {
    console.log(caller + " " + std + "! Have you done today's homework?");
  });
});
