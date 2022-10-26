let list= new Set();
for(let i=0; i<4;i++){
 let x = Math.floor(Math.random() * 10 + 1);
 list.add(x);
}
console.log(list);
console.log(list.has(8));
