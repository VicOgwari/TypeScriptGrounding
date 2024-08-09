"use strict";
//convert to more or less specific
let a = 'hello';
let b = a; //less specific
let c = a; //more specific
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
//Assertions
let myVal = addOrConcat(2, 3, 'concat');
let nextVal = addOrConcat(2, 3, 'concat'); //this returns a string but ts can't see this
10; ///Double assertion
//The DOM (document object model). Assertion users
const img = document.querySelector('img');
const myImg = document.getElementById('#myId');
const nxtImg = document.getElementById('#tr');
img.src;
myImg.src;
nxtImg.src;
