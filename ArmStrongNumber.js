
// 3. To check wether number is ArmStrong Number or not

let sum = 0;
const number = prompt('Enter a three-digit positive integer: ');
let temp = number;
while (temp > 0) {
    let remainder = temp % 10;
    sum += remainder * remainder * remainder;
    temp = parseInt(temp / 10); // convert float into integer
}
if (sum == number) {
    console.log(`${number} is an Armstrong number`);
}
else {
    console.log(`${number} is not an Armstrong number.`);
}

