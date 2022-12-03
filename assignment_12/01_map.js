let emp={
    "id": [ 67, 48, 29 ],
    "name": [ "Hitanshu", "Ninad", "Amandeep" ],
    "salary": [ 75000, 82000, 98000 ]

};

//a
console.log(emp['id']);

//b
console.log(emp['id'].length);

//c
let map=new Map();
for(let i in emp['id']){
    map.set(emp['id'][i],emp['name'][i]);
}
console.log(map);

//d
let arr=new Array();
for(let i in emp["salary"]){
    arr.push(emp["salary"][i]);
}
console.log(arr);

//e
let sum=0;
let n=emp["salary"].length;
for(let i of emp["salary"]){
sum+=i;
}
console.log(sum/n);



// sample output
// [ 67, 48, 29 ]
// 3
// Map(3) { 67 => 'Hitanshu', 48 => 'Ninad', 29 => 'Amandeep' }
// [ 75000, 82000, 98000 ]
// 85000