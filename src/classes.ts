class Coder{
    secondLang!: string

    constructor(
        public readonly name: string, public music: string,
         private age: number, 
         protected lang: string = 'Typescript'){
        this.name = name
        this.music = music
        this.lang = lang
        this.age = age
    }

    public getAge(){
        return `Hello, I'm ${this.age}`
    }
    
}

const vic = new Coder('Vic', 'Pop', 28)
console.log(vic.getAge)

//Calls to private & protected Compiles and runs in JS even though TS doesn't like it.
// console.log(vic.age)
// console.log(vic.lang)

class webDev extends Coder{
    constructor(
        public computer: string, name: string, music: string, age: number
    ){
        super(name, music, age)
        this.computer = computer
    }

    public getLang(){
        //Accessing protected member from subclass
        return `I write ${this.lang}`
    }
}


const Sara = new webDev('Mac', 'Sara', 'Lofi', 29)
console.log(Sara.getLang)
//Protected member access fails outside Coder & WebDev
// console.log(Sara.lang)
//////////////////////////////////////////

//Interfaces
interface Musician{
    name: string,
    instrument: string,
    plays(action: string): string
}

class Guitarist1 implements Musician {

    name: string 
    instrument: string

    constructor(name: string, instrument: string){
        this.name = name
        this.instrument = instrument
    }

    plays(action: string): string {
        return `${this.name} ${action} the ${this.instrument}`
    }
}

const Tello = new Guitarist1('Tello', 'Drumset')
console.log(Tello.plays('rocks'))
////////////////////////

class Peep{
    //Static members can't be updated outside by class instances. Only available internally
    static count: number = 0
    static getCount(): number{
        return Peep.count
    }

    public id: number
    constructor(public name: string){
        this.name = name
        this.id = ++Peep.count //Starts id at 1
    }
}

const John = new Peep('John')
const Leon = new Peep('Leon')
const Mary = new Peep('Mary')

console.log(John.id)
console.log(Leon.id)
console.log(Mary.id)
console.log(Peep.count) //Keeps count of class instances
////////////////////////////////////////////

class Bands{
    private dataState: string[]

    constructor(){
        this.dataState = []
    }

    public get data(): string[] {
        return this.dataState
    }

    public set data(values: string[]){
        if(Array.isArray(values) && values.every(el => typeof el === 'string')){
            this.dataState = values
            return
        } else throw new Error(`Param is not an Array of strings.`)
    }

}

const MyBands = new Bands()
MyBands.data = ['Neil Young', 'Led Zep']
console.log(MyBands.data)
MyBands.data = [...MyBands.data, 'ZZ Top']
console.log(MyBands.data)