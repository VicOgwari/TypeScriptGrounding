type one = string
type two = string | number
type three = 'hello'

//convert to more or less specific
let a: one = 'hello'
let b = a as two //less specific
let c = a as three //more specific

let d = <one> 'world'
let e = <string | number> 'world'

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): string | number => {
    if(c === 'add')
        return a + b;
    return '' + a + b;
}

//Assertions
let myVal: string = addOrConcat(2, 3, 'concat') as string
let nextVal: number = addOrConcat(2, 3, 'concat') as number //this returns a string but ts can't see this
(10 as unknown) as string ///Double assertion

//The DOM (document object model). Assertion users
const img = document.querySelector('img')!
const myImg = document.getElementById('#myId') as HTMLImageElement
const nxtImg = <HTMLImageElement> document.getElementById('#tr')

img.src
myImg.src
nxtImg.src