let n=prompt("enter the number of inputs : ");

let arr=[];
for(let i=0; i<n;i++){
let a=prompt("enter the value : ");    
arr.push(a);
}
console.log("original array : " + arr);

let sqarr=[];
arr.forEach(i =>{sqarr.push(i * i);} );
console.log("squared array : " + sqarr);

let map =new Map();
for(let i in arr){
    map.set(arr[i],sqarr[i]);
}
console.log(map);



//sample output
// [1,2,3]
// [1,4,9]
// Map(3) { 1 => 1, 2 => 4, 3 => 9 }