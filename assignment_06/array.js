const arr=[12,3,2,56,76,21,34];

function find_largest( arr, n){
arr=arr.sort(function(a,b){return a-b});
arr=arr.reverse();

console.log(`The ${n}th largest number is ${arr[n-1]} `);
}

find_largest(arr, 4);


