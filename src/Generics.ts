//Generic types work with any type we would put in that function
const aFunc = <T>(a: T): T => a

const isObj = <T>(arg: T): boolean => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null)
}
//Can pass anything to utility function with a generic type
console.log(isObj(null))
console.log(isObj('John'))
console.log(isObj([1, 2, 3]))
console.log(isObj({name: 'Henry'}))
console.log(isObj(true))

const isTrue = <T>(arg: T): {arg: T, is: boolean} => {
    if(Array.isArray(arg) && !arg.length){
        return {arg, is: false}
    }
    if(isObj(arg) && !Object.keys(arg as keyof T).length){
        return {arg, is: false}
    }

    return {arg, is: !!arg}
}

console.log(isTrue(null))
console.log(isTrue(undefined))
console.log(isTrue(false))
console.log(isTrue(true))
console.log(isTrue(0))
console.log(isTrue(1))
console.log(isTrue(''))
console.log(isTrue('Vic'))
console.log(isTrue({}))
console.log(isTrue({name: 'Vic'}))
console.log(isTrue([]))
console.log(isTrue([1, 2, 3]))
console.log(isTrue(NaN))
console.log(isTrue(-0))


interface BooleanCheck <T> {
    value: T,
    is: boolean

}

const checkBoolVal = <T>(arg: T): BooleanCheck <T> => {
    if(Array.isArray(arg) && !arg.length){
        return {value: arg, is: false}
    }
    if(isObj(arg) && !Object.keys(arg as keyof T).length){
        return {value: arg, is: false}
    }

    return {value: arg, is: !!arg}
}

interface HasId {
    id: number
}

const processUser = <T extends HasId> (user: T): T => {
    return user
}

console.log(processUser({id: 1, name: 'Dave'}))
console.log(processUser({id: 2, name: 'Sam', town: 'Nai'}))
// Must pass id param since generic type T extensts HasId
// console.log(processUser({name: 'Sam', town: 'Nai'}))

const getUserProperty = <T extends HasId, K extends keyof T> (users: T[], key: K): T[K][] => {
    return users.map(user => user[key])
} 

const userArray = [
    {
        id: 1,
        name: 'Vic',
        town: 'Nai',
        userName: 'Kivi',
        email: 'hqvico@gmail.com',
        number: 766554433,
        address: {
            constituency: 'Kasarani',
            street: 'Hunters'
        }
    },
    {
        id: 2,
        name: 'Antony',
        town: 'Nai',
        userName: 'Kirun',
        email: 'lombard@gmail.com',
        mobile: 799887766,
        address: {
            constituency: 'Sirare',
            street: 'Border'
        }
    }
]

console.log(getUserProperty(userArray, 'email'))

class StateObject <T> {
    private data: T

    constructor(value: T){
        this.data = value
    }

    get state(): T{
        return this.data
    }
    set state(v: T){
        this.data = v
    }
}

//Typescript infers utility class state as string 
const nameStrings = new StateObject('Vic')
console.log(nameStrings.state)
nameStrings.state = 'Ray'
console.log(nameStrings.state)
// nameStrings.state = 12

const mixedState = new StateObject<(string | number | boolean)[]>([15])
console.log(mixedState.state)
mixedState.state = ['Violet', 21, true, true]
console.log(mixedState.state)