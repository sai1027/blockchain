let employees = [
  {
    id: 1,
    name: "Abhinav",
    department: "IT",
    Salary: 75000,
  },
  {
    id: 2,
    name: "Gaurav",
    department: "Sales",
    Salary: 52000,
  },
  {
    id: 3,
    name: "Raj",
    department: "IT",
    Salary: 64000,
  },
];



//a
let itEmp=[]
employees
  .filter((i) => i["department"] == "IT")
  .forEach((j) => itEmp.push(j["name"]));

console.log("IT employee list : ");
console.log(itEmp);


//b
let salEmp=[];

employees.filter(i=>i['Salary']<65000)
        .forEach(j=>salEmp.push(j['name']));

console.log("salary less than 65000 list : ");
console.log(salEmp);



/*
sample output

IT employee list : [ 'Abhinav', 'Raj' ]
salary less than 65000 list : [ 'Gaurav', 'Raj' ]

*/