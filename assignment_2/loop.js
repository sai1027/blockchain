var sum1=0;
var sum2=0;
var sum3=0;

for(let i=1; i<1000;i++){
    if(i%3==0 ){
        sum1+=i; 
    }
    if (i % 5 == 0)
        sum2+=i;

    if (i % 15 == 0) 
        sum3 += i;

}

console.log(sum1+sum2-sum3);



//   output  

//  233168