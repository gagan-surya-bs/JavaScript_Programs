//  to multiply even  number by 2
let number = [2, 4, 5, 7, 8, 3, 14];
let mapped = number.map((val, index) => {
  if (val % 2 === 0) {
    return val * 2;
  } else {
    return val;
  }
});
console.log(mapped);
