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

person[3].name = "tripti";
console.log(person);

let newperson = person.filter((value, index) => {
  if (value.age == 10) {
    return value;
  }
});
console.log(newperson);
