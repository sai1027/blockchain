let students = [
{ name: "John", marks: '92' },
{ name: "Oliver", marks: '85' },
{ name: "Michael", marks: '79' },
{ name: "Dwight", marks: '95'},
{ name: "Oscar", marks: '64' },
{ name: "Kevin", marks: '48' },
];

let studmap=new Map();
let studgrp={'A':[],'B':[],'C':[],'D':[],'E':[],'F':[]};

for(let i in students){
    let mark=Number(students[i]["marks"])
    let grade=0;
    switch (true) {
      case mark > 90:
        grade="A";
        break;

      case mark > 80:
        grade = "B";
        break;

      case mark > 70:
        grade = "C";
        break;
      case mark > 60:
        grade = "D";
        break;
      case mark > 50:
        grade = "E";
        break;
      default:
        grade = "F";
        break;
    }
    studmap.set(students[i]['name'],grade);
    let map1=new Map();
    map1.set(students[i]['name'],grade);
    studgrp[grade].push(map1);

}

console.log(studmap);
console.log(studgrp);


// sample output
/*
{
'John' => 'A',
  'Oliver' => 'B',
  'Michael' => 'C',
  'Dwight' => 'A',
  'Oscar' => 'D',
  'Kevin' => 'F'
}


{
  A: [ Map(1) { 'John' => 'A' }, Map(1) { 'Dwight' => 'A' } ],
  B: [ Map(1) { 'Oliver' => 'B' } ],
  C: [ Map(1) { 'Michael' => 'C' } ],
  D: [ Map(1) { 'Oscar' => 'D' } ],
  E: [],
  F: [ Map(1) { 'Kevin' => 'F' } ]
}


*/