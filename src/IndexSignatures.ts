//Index signatures

// interface TransactionObj{
//     readonly [index: string]: number
// }

interface TransactionObj {
    readonly [index: string]: number
    Pizza: number,
    Box: number,
    Job: number
}

const todaysTransactions: TransactionObj = {
    Pizza: -10,
    Box: -5,
    Job: 50
}

console.log(todaysTransactions.Pizza)
console.log(todaysTransactions['Pizza'])

let prop: string = 'Pizza'
let undefinedIndex = 'Vic'
console.log(todaysTransactions[prop])
console.log(todaysTransactions[undefinedIndex])

const todaysNet = (transactionObjs: TransactionObj): number => {
    let total = 0
    for(const t in transactionObjs){
        total += transactionObjs[t]
    }
    return total
}

// todaysTransactions.Pizza = 40
/////////////////////////////////////////

interface Student{
    // [index: string]: string | number | number[] | undefined
    name: string,
    GPA: number, 
    classes?: number[]
}

const student: Student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200]
}

// console.log(student.test)
for(const k in student){
    console.log(`${k}: ${student[k as keyof Student]}`)
}

Object.keys(student).map(key => {
    console.log(student[key as keyof typeof student])
})

const logStudentKey = (student: Student, key: keyof Student): void => {
    console.log(`Studnent's ${key}: ${student[key]}`)
}
logStudentKey(student, 'GPA')
///////////////////////////////////////////

// interface Incomes{
//     [index: string]: number
// }

type Streams = 'salary' | 'bonus' | 'sidehustle'
type Incomes = Record<Streams, number> 
const monthlyIncomes: Incomes ={
    salary: 500,
    bonus: 100,
    sidehustle: 250
}

for(const t in monthlyIncomes){
    console.log(`${monthlyIncomes[t as keyof Incomes]}`)
}