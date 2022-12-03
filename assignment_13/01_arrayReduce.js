let arr = [];
let n = prompt("enter the number of inputs: ");

for (let i = 0; i < n; i++) {
  arr[i] = prompt();
}
console.log(arr);

//a
let sum = arr.reduce((total, num) => (total += num), 0);
console.log(sum);

//b
let len = arr.length;
console.log(sum / len);
