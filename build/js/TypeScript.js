"use strict";
let age = 20;
if (age < 50)
    age += 10;
console.log(age);
//Arrays vs Tuples
let numbers = ["1", "2", "3"];
let mixedData1 = ["WAV", 4567, true];
let myTuple = ["WAV", 4567, true];
numbers.forEach(n => console.log(n));
//Tuples
let assortTuple = [22, "The quick brown fox!", false];
;
let mySize = 2 /* Size.Medium */;
console.log(mySize);
//Functions
function calculateTax(income, taxYear = 2022) {
    if (taxYear == 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(50000);
let employee = { id: 1, name: "Vic", retire: (date) => { console.log(date); } };
let employee1 = { id: 2, name: "Mike", retire: (date) => { console.log(date); } };
//Union types
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
let textBox = {
    drag: () => { }, resize: () => { }
};
