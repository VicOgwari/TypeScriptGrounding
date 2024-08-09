let age: number = 20;
if (age < 50)
    age += 10;
console.log(age);

//Arrays vs Tuples
let numbers = ["1", "2", "3"];
let mixedData1 = ["WAV", 4567, true];
let myTuple: [string, number, boolean] = ["WAV", 4567, true];
numbers.forEach(n => console.log(n));

//Tuples
let assortTuple: [number, string, boolean] = [22, "The quick brown fox!", false];

//Enum using PascalCase
const enum Size {Small = 1, Medium, Large};
let mySize = Size.Medium;
console.log(mySize);


//Functions
function calculateTax(income: number, taxYear = 2022): number{
    if(taxYear == 2022)
        return income * 1.2;
    return income * 1.3;
}

calculateTax(50_000);

//Objects using type alias
type Employee = {
    readonly id: number,
     name: string,
     retire: (date: Date) => void

}
let employee: Employee = {id: 1, name: "Vic", retire: (date: Date) => { console.log(date);}};
let employee1: Employee = {id: 2, name: "Mike", retire: (date: Date) => { console.log(date);}}

//Union types
function kgToLbs(weight: number | string): number{
    if(typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}


//Intersection types
type Dragable = {drag: () => void};
type Resizable = {resize: () => void};
type UIWidget = Dragable & Resizable;
let textBox: UIWidget = {
    drag: () => {}, resize: () => {}
}