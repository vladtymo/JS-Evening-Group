// --------------- Arrays ---------------
// let obj = new Object();

// var array = new Array();
// array[0] = 100;
// array[1] = 200;
// array[2] = 300;

// var array = new Array(3); // lenght: 3

// for (let i = 0; i < array.length; i++) {
//     console.log(`Element[${i}]: ${array[i]}`);
// }

// var array = new Array(6.5, 2.2, 0, 100);

// var array = [3, -5, 123, 44, -1, 23, 123, 66]; // Lenght: 6

// array[0] = 44;
// console.log(array[0]); // 44

// array[6] = 60;
// console.log(array[6]);

// array[10] = 55;
// console.log(array[10]);

// console.log(`Array lenght: ${array.length}`);

// for (let i = 0; i < array.length; i++) {
//     console.log(`Element[${i}]: ${array[i]}`);
// }

// for (let i = 0; i < array.length; i++) {
//     console.log(`Element[${i}]: ${array[i]}`);
// }

// array.forEach((elem, ind) => {
//     console.log(`Element[${ind}]: ${elem}`);
// })

// for (const key in array) {
//     console.log(key);
// }

// for (const key of array) {
//     console.log(key);
// }

// // -=-=-=-=-=-=- Array Methods -=-=-=-=-=-=-
// array.push(777);
// console.log("Array:", array);

// array.pop();
// console.log("Array:", array);

// array.shift();
// console.log("Array:", array);

// array.unshift(555);
// console.log("Array:", array);

// console.log("Index of first 123:", array.indexOf(123));
// console.log("Index of last 123:", array.lastIndexOf(123));

// console.log("Found:", array.find((elem) => elem < 0 ));

// array.sort();
// console.log("Sorted by default:", array);

// array.sort((a, b) => a - b);
// console.log("Sorted with custom func:", array);

// // // -=-=-=-=-=-=- Strings -=-=-=-=-=-=-

// let str = "Hello, how are you?";

// console.log("The first symbol:", str[0]);
// str[0] = 'L';
// console.log("The first symbol:", str[0]);

// let splited = str.split(' ');
// console.log("Splited: ", splited);

// let joined = splited.join('-');
// console.log("Joined: ", joined);

// console.log("To Upper: ", str.toUpperCase());

// // -=-=-=-=-=-=- Variable Scopes -=-=-=-=-=-=-
// // var let const

// // error with let
// //console.log("Outside (before):", variable);

// if (true) {
//     let variable = 10;
//     //console.log("In scope:", variable);

//     // error with let
//     //var variable = 20;
//     //console.log("In scope (second time):", variable);
// }

// // error with let
// //console.log("Outside (after):", variable);

// let input = +prompt("Enter a number:");

// console.log("Number: ", input);

// console.log("Floor: ", Math.floor(input));
// console.log("Ceil: ", Math.ceil(input));
// console.log("Round: ", Math.round(input));


// -=-=-=-=-=-=-=- Objects -=-=-=-=-=-=-=-

let person = {
    ["firstName"]: "Bob",
    ["lastName"]: "Blabla",
    age: 30,
    passport: {
        number: "0767584",
        authority: 3235
    },
    // showInfo: function() {
    //     console.log(`Name: ${this.firstName} Surname: ${this.lastName}`);
    // }
    showInfo() {
        console.log(`Name: ${this.firstName} Surname: ${this.lastName}`);
    }
}

console.log(person);
person.showInfo();

console.log("Passport number: ", person.passport.number);

person.creditCard = "1234-4444-5555-4444";

let emptyObj = {};
emptyObj.name = "My name";
emptyObj.age = 44;

console.log("Age: ", emptyObj.age);
delete emptyObj.age;
console.log("Age: ", emptyObj.age);

// -=-=-=-=-=-=-=- Object Constructor -=-=-=-=-=-=-=-
function Car(model, year, color) {
    this.model = model;
    this.color = color;
    this.year = year;
}

let myCar = new Car("Audi", )

// var print = "Hello print!";

// function print() {

//     var print = "Some text!";
//     console.log("print type:", typeof(print));

//     console.log("Print func!");
// }

// console.log("print type:", typeof(print));

// print();
// print();

// console.log("print type:", typeof(print));