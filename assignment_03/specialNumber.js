// var num = prompt("Give a number ? ");

var num=145;
var len = num.toString().length;
var sum = 0,n = num,val = 0;

for (let i = 1; i <= len; i++) {
  val = n % 10;
  n = (n - val) / 10;
  sum+=factorial(val);
 
}


if (num == sum) {
  console.log("Special number");
} else {
  console.log("Not a Special number");
}

function factorial(n){
    var ans=1;
    for(i=1;i<=n;i++){
        ans*=i;
    }
    return ans;
}