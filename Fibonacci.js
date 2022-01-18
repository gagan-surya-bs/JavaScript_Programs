// 1 program to generate fibonacci series up to n terms

const number = parseInt(prompt("Enter the number of terms: "));
let n1 = 0,
  n2 = 1,
  nextTerm;
let arr = [0, 1];

console.log("Fibonacci Series:");

for (let i = 1; i <= number; i++) {
  nextTerm = n1 + n2;
  arr.push(nextTerm);
  n1 = n2;
  n2 = nextTerm;
}
console.log("arr is", arr);
