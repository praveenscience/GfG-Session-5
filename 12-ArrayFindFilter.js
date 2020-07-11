const names = [
  "Dorinda Krouse",
  "Maribel Edelson",
  "Jone Auten",
  "Dallas Prevo",
  "Beau Cleek",
  "Lilia Hoskins",
  "Lavina Gaulding",
  "Carlton Shiflet",
  "Annemarie Schiro",
  "Meta Becnel",
  "Lino Skates",
  "Carolyne Dawdy",
  "Nieves Swanger",
  "Reba Cadden",
  "Irena Konkel",
  "Alvina Calvi",
  "Ian Sinquefield",
  "Chieko Overson",
  "Maryam Danks",
  "Jefferson Janzen"
];
console.log(
  names.filter(function (name) {
    // Condition for filtering.
    return name[0] == "A";
  })
);

const name = "Hello";
console.log(Array.isArray(names));
console.log(Array.isArray(name));
