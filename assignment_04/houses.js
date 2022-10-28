function house(n) {
  var total = 0;

  if (n > 0) {
    total = 6 + 5 * (n - 1);
    return total;
  } else {
    return 0;
  }
}

var num = prompt("Enter houses ? ");

var ans = house(num);

console.log("The total sticks required is "+ans);
