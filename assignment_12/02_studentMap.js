let map=new Map();

map.set('id',[1,2,3]);
map.set("name", ["Hitanshu", "Ninad", "Amandeep"]);
map.set('scores',[90,88,92]);

//a
console.log(map);

//b
console.log(map.get('name'));

//c
map.delete('scores');
console.log(map);

//d
map.forEach((v) => {console.log(v);});

map.forEach((v,k) => { console.log(k,v);});

map.forEach((v, k,arr) => {console.log(k, v,arr);});

