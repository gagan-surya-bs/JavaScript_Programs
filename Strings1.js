//1 . To Find Largest Character in A String

let array = ["gagan", "Ankitahjaiujj", "Balajits", "bala", "Yakshith"];
let temp = "";
for (let i = 1; i <= array.length - 1; i++) {
  for (let j = 0; j < i; j++) {
    if (array[i].length < array[j].length) {
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
}
console.log(array);
console.log(array[array.length - 1]);

//2. To print * as a Square
let str = "";

for (let i = 0; i < 5; i++) {
  for (let i = 0; i < 5; i++) {
    str += "*";
  }
  str += "\n";
}
console.log(str);

//3. program to check the number of occurrence of a character

// function countString(str, letter) {
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {

//     if (str.charAt(i) == letter) {
//       count += 1;
//     }
//   }
//   return count;
// }

// const string = prompt("Enter a string: ");
// const letterToCheck = prompt("Enter a letter to check: ");

// const result = countString(string, letterToCheck);

// console.log(result);
