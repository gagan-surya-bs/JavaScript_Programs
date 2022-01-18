

// 2. To filter Data greater than 6 letter
let arr = ["gagansurya", "Bala", "Ankita", "sooraj", "tripp"];

let filtered = arr.filter((value, index) => {
  if (value.length > 5) {
    return value;
  }
});
console.log(filtered);
 

