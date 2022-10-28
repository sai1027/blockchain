let input = prompt("enter the array : ");
let arr = input.split(" ");
arr = arr.map(Number);
console.log(arr);

let l = arr.length;
let even = [];
let odd = [];
for (let i = 0; i < l; i++) {
  if (arr[i] % 2 == 0) {
    even.push(arr[i]);
  } else {
    odd.push(arr[i]);
  }
}

var evenSum = 0;
even.forEach((x) => {
  evenSum += x;
});
var oddSum = 0;
odd.forEach((x) => {
  oddSum += x;
});

console.log("Difference = " + Math.abs(evenSum - oddSum));
console.log("Odd elements = " + odd.length);
console.log("Even elemenst = " + even.length);
console.log("Average = " + (evenSum + oddSum) / l);
for (let i = 1; i <= evenSum && i <= oddSum; i++) {
  if (evenSum % i == 0 && oddSum % i == 0) {
    console.log("GCD = " + i);
    break;
  }
}

// sample output :
// [ 1, 2, 3, 4, 5 ]
// Difference = 3
// Odd elements = 3
// Even elemenst = 2
// Average = 3
// GCD = 1
