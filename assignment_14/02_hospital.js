let hospitals = [
{
"id": 1,
"name":"Hospital A",
"location":"Delhi",
"noOfBeds":450,
"availability":"yes"
},
{
"id": 2,
"name":"Hospital B",
"location":"Pune",
"noOfBeds":150,
"availability":"no"
},
{
"id": 3,
"name":"Hospital C",
"location":"Pune",
"noOfBeds":350,
"availability":"yes"
}];


//a
let h1=[];
hospitals.filter(i => i["noOfBeds"]>200)
         .forEach(j=>h1.push(j));

console.log("Number of beds > 200 : ");
console.log(h1);


//b
let h2=[];
hospitals.filter(i => i["availability"]=='yes')
         .forEach(j=>h2.push(j));

console.log("Available beds : ");
console.log(h2);

//c
let h3=[];
hospitals.filter((i) => i["location"]=='Pune')
         .forEach(j=>h3.push(j));

console.log("location in pune : ");
console.log(h3);