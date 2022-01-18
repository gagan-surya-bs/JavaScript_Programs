// 8. Array in Descending
let arr = [55, 89, 45, 96, 25, 17];
let assc = [];
for (let i = 1; i < arr.length; i++) {
  for (let j = 0; j < i; j++) {
    if (arr[i] > arr[j]) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
console.log(arr);
