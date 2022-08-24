function factorial(a){
    let ans=1;
    for(let i=1; i<=a;i++)
        ans*=i;
    
    console.log("prime number= "+a+"  factorial= "+ans);
}


function prime(a,b){
    
    for(let i=a;i<b;i++){
        let isPrime = true;
        if(i>1){
            for(let j=2; j<i; j++){
                if(i%j==0){
                    isPrime=false;
                    break;
                }      
            }
        }
        if(isPrime==true){
            factorial(i);
        }
    }
}


// start here 
prime(1,100);


//      output      //

// prime number= 1  factorial= 1
// prime number= 2  factorial= 2
// prime number= 3  factorial= 6
// prime number= 5  factorial= 120
// prime number= 7  factorial= 5040
// prime number= 11  factorial= 39916800
// prime number= 13  factorial= 6227020800
// prime number= 17  factorial= 355687428096000
// prime number= 19  factorial= 121645100408832000
// prime number= 23  factorial= 2.585201673888498e+22
// prime number= 29  factorial= 8.841761993739701e+30
// prime number= 31  factorial= 8.222838654177922e+33
// prime number= 37  factorial= 1.3763753091226343e+43
// prime number= 41  factorial= 3.3452526613163803e+49
// prime number= 43  factorial= 6.041526306337383e+52
// prime number= 47  factorial= 2.5862324151116818e+59
// prime number= 53  factorial= 4.2748832840600255e+69
// prime number= 59  factorial= 1.3868311854568986e+80
// prime number= 61  factorial= 5.075802138772248e+83
// prime number= 67  factorial= 3.647111091818868e+94
// prime number= 71  factorial= 8.504785885678622e+101
// prime number= 73  factorial= 4.4701154615126834e+105
// prime number= 79  factorial= 8.946182130782973e+116
// prime number= 83  factorial= 3.945523969720657e+124
// prime number= 89  factorial= 1.6507955160908452e+136
// prime number= 97  factorial= 9.619275968248206e+151