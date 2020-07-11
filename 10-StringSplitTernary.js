let name = "Hello";
let len = name.split(" ").filter(a => !!a).length;
console.log(name + " has " + len + " word" + (len === 1 ? "" : "s") + "!");

name = "Geeks for Geeks";
len = name.split(" ").filter(a => !!a).length;
console.log(name + " has " + len + " word" + (len === 1 ? "" : "s") + "!");

name = "";
len = name.split(" ").filter(a => !!a).length;
console.log(name + " has " + len + " word" + (len === 1 ? "" : "s") + "!");
