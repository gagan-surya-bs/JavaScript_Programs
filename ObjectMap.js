var person = [
  {
    name: "ank",
    age: 30,
  },
  {
    name: "ram",
    age: 20,
  },
  {
    name: "raj",
    age: 10,
  },
  {
    name: "tia",
    age: 50,
  },
];


let mapped = person.map((value, index) => {
    return value.name = value + "testyantra"
});
console.log(mapped);
