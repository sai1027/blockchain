let s="hello, I am CSE student";

// a) convert string to uppercase
console.log(s.toUpperCase());


// b) only 1st letter to uppercase
len =s.length
console.log(s[0].toUpperCase() + s.slice(1,len));


// c) convert ot lower case
console.log(s.toLowerCase());



// d) break into halves and swap them
let s1 = s.slice(0, len / 2);
let s2 = s.slice(len / 2, len);

console.log(s2 + s1);


// e) count the repeating charecters 
function countString(str, letter) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == letter) {
      count += 1;
    }
  }
  return count;
}

const string = "hello how are u";
const letterToCheck = "h";

const result = countString(string, letterToCheck);

console.log(result);


// reverese the string
console.log(s.split("").reverse().join(""));