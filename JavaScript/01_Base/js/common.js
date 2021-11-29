console.log("Hello world!");
//console.warn("Check again!")
//console.error("Somthing wend wrong!");

let a = 10;

// console.log("a = ", a);
console.log(`a = ${a}, type:`, typeof(a));
a = 10.5;
console.log(`a = ${a}, type:`, typeof(a));
a = "js";
console.log(`a = ${a}, type:`, typeof(a));
a = true;
console.log(`a = ${a}, type:`, typeof(a));

a = function(left, right) {
    console.log(`${left} + ${right} = ${left + right}`);
}
console.log(`a = ${a}, type:`, typeof(a));

a = [1, 2, 3, 77, "red", "green", true, [5, 6, 7], a];
console.log(`a = ${a}, type:`, typeof(a));

a[8](4, 6);

let array = [1, 2, 3, 4, 5];

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

array.forEach((elem, ind) => console.log(elem * ind));

alert("Meesage in alert!");

let first = +prompt("Enter a first numner:"); // + convert to number
let second = +prompt("Enter a second numner:");

console.log(`First = ${first} type:`, typeof(first));
console.log(`Second = ${second} type:`, typeof(second));

if (first === second) // check type also
    console.log("Good!");
else
    console.log("Bad!");

console.log(confirm("Do you want to learn JS?"));

console.log("Random: ", Math.random())

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

console.log("Random: ", getRandomArbitrary(1, 20));

console.log((3 > 2) ? "Bigger" : "Less");