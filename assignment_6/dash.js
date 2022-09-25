function dash(a){

    let b = a.toString().split("").map(Number);
    let ans="";
    let n =b.length;
    for(let x =0; x<n; x++){
        if(b[x]%2==0 && b[x+1]%2==0){
            ans=ans+b[x]+"-";
        }else{
            ans=ans+b[x];
        } 
    }
    ans=ans+b[n-1];
    console.log(ans);
}

dash(235680357);

