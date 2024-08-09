"use strict";
//Literal types
let myName;
let userName;
//Functions
const add = (a, b) => {
    return a + b;
};
let subtract = function (a, b) {
    return a - b;
};
//optional params
const addAll = (a, b, c) => {
    if (typeof (c) !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
//default params
const sumAll = (a, b, c = 5) => {
    return a + b + c;
};
//Rest params
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
const createError = (errMessge) => {
    throw new Error(errMessge);
};
const infinite = () => {
    let i = 0;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
const numberOrString = (value) => {
    if (isNumber(value))
        return 'number';
    if (typeof value === 'string')
        return 'string';
    return createError('This should never happen');
};
//type mathFunction = (a: number, b: number) => number
// interface mathFunction {
//     (a: number, b: number): number
// }
const logMessage = (message) => {
    console.log(message);
};
logMessage('Hello!');
logMessage((2 | 3 | 7));
logMessage(add(46, 59));
logMessage(addAll(46, 59));
logMessage(addAll(46, 59, 100));
logMessage(sumAll(46, 59));
logMessage(sumAll(46, 59, undefined));
logMessage(sumAll(46, 59, 100));
logMessage(total(1, 2, 3, 4));
