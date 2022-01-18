//4 . Arm strong number using Array Methods

let num = prompt("Enter number");

let mapped = num
  .toString()
  .split("")
  .map(value => value * value * value)
  .reduce((prev, current) => {
    return prev + current;
  });
if (num == mapped) {
  console.log("It is Arm Strong NUmber");
} else {
  console.log("It is not Arm Strong");
}
