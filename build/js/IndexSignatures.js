"use strict";
//Index signatures
const todaysTransactions = {
    Pizza: -10,
    Box: -5,
    Job: 50
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);
let prop = 'Pizza';
let undefinedIndex = 'Vic';
console.log(todaysTransactions[prop]);
console.log(todaysTransactions[undefinedIndex]);
const todaysNet = (transactionObjs) => {
    let total = 0;
    for (const t in transactionObjs) {
        total += transactionObjs[t];
    }
    return total;
};
const student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200]
};
// console.log(student.test)
for (const k in student) {
    console.log(`${k}: ${student[k]}`);
}
Object.keys(student).map(key => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`Studnent's ${key}: ${student[key]}`);
};
logStudentKey(student, 'GPA');
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
};
for (const t in monthlyIncomes) {
    console.log(`${monthlyIncomes[t]}`);
}
