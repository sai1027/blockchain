let input = prompt("enter the array : ");
let arr1 = input.split(" ");
arr1 = arr1.map(Number);

let arr2=[];
let arr3=[];

for(let i=0; i<arr1.length; i++){
    if(arr2.includes(arr1[i])){
        arr3.push(arr1[i]);
    }else{
        arr2.push(arr1[i]);
    }
}

console.log(arr2);
console.log(arr3);