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
