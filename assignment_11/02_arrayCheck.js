let input1 = prompt("enter the array 1 : ");
let arr1 = input1.split(" ");
arr1 = arr1.map(Number);


let input2 = prompt("enter the array 2 : ");
let arr2 = input2.split(" ");
arr2 = arr2.map(Number);

let a1=0;
let a2=0;

for(let i=0; i<arr1.length; i++){
    if(arr1[i]==4){
        a1=1;
        break;
    }
}
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] == 4) {
    a2 = 1;
    break;
  }
}

if(a1==1 && a2==1){
    console.log("4 in both arrays");
}else if(a1==1 && a2==0){
    console.log("4 in array 1");
}else if(a1==0 && a2==1){
    console.log("4 in array 2");
}