function fac( n){
    if (n==0)
        return 1;
    else
    return n*fac(n-1);
}

var num=prompt("Enter a number? ");
var factorial=fac(num);
console.log(factorial);
