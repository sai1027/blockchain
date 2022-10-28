
var num=prompt("Give a number ? ");
var len=num.toString().length;
var sum=0,n=num, val=0;

for(let i=0; i<=len; i++){
    val=n%10;
    n=(n-val)/10;

    sum+=(val**3);


}

if(num==sum){
    console.log("Armstrong number");
}
else{
    console.log("Not an Armstrong number");
}

