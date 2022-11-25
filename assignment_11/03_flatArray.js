let arr = [1, 2, [3, 4, [5]]];

let flatArray = [];

for(let i=0; i<3; i++){
    flatArray = [].concat.apply([], arr);
    arr=flatArray;
}
console.log(flatArray);