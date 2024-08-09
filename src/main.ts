//Type aliases
type stringOrNumber = string | number
type stringOrNumberArray = (string | number)[]

type Guitarist = {
    readonly name: string,
    active: boolean,
    albums?: stringOrNumberArray
};

//Literal types
let myName: 'Vic'
let userName: 'Mike' | 'Rolly' | 'Rachael'

//Functions
const add = (a: number, b: number): number => {
    return a + b
}

let subtract = function(a: number, b: number): number {
    return a - b;
}

//optional params
const addAll = (a: number, b: number, c?: number): number =>{
    if(typeof(c) !== 'undefined'){
        return a + b + c
    }
    return a + b
}

//default params
const sumAll = (a: number, b: number, c: number = 5): number =>{
    return a + b + c
}

//Rest params
const total = (a: number, ...nums: number[]) => {
    return a + nums.reduce((prev, curr) => prev + curr)
}

const createError = (errMessge: string): never => {
    throw new Error(errMessge)
}

const infinite = () => {
    let i: number = 0
    while(true){
        i++
        if(i > 100) break
    }
}

const isNumber = (value: any) => {
    return typeof value === 'number'? true : false
}

const numberOrString = (value: number | string): string => {
    if (isNumber(value)) return 'number'
    if(typeof value === 'string') return 'string'
    return createError('This should never happen')
}

//type mathFunction = (a: number, b: number) => number
// interface mathFunction {
//     (a: number, b: number): number
// }

const logMessage = (message: any): void => {
    console.log(message)
}

logMessage('Hello!')
logMessage((2 | 3 | 7))
logMessage(add(46, 59))
logMessage(addAll(46, 59))
logMessage(addAll(46, 59, 100))
logMessage(sumAll(46, 59))
logMessage(sumAll(46, 59, undefined))
logMessage(sumAll(46, 59, 100))
logMessage(total(1, 2, 3, 4))
