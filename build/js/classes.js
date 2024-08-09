"use strict";
class Coder {
    constructor(name, music, age, lang = 'Typescript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.lang = lang;
        this.age = age;
    }
    getAge() {
        return `Hello, I'm ${this.age}`;
    }
}
const vic = new Coder('Vic', 'Pop', 28);
console.log(vic.getAge);
//Calls to private & protected Compiles and runs in JS even though TS doesn't like it.
// console.log(vic.age)
// console.log(vic.lang)
class webDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        //Accessing protected member from subclass
        return `I write ${this.lang}`;
    }
}
const Sara = new webDev('Mac', 'Sara', 'Lofi', 29);
console.log(Sara.getLang);
class Guitarist1 {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    plays(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Tello = new Guitarist1('Tello', 'Drumset');
console.log(Tello.plays('rocks'));
////////////////////////
class Peep {
    static getCount() {
        return Peep.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peep.count; //Starts id at 1
    }
}
//Static members can't be updated outside by class instances. Only available internally
Peep.count = 0;
const John = new Peep('John');
const Leon = new Peep('Leon');
const Mary = new Peep('Mary');
console.log(John.id);
console.log(Leon.id);
console.log(Mary.id);
console.log(Peep.count); //Keeps count of class instances
////////////////////////////////////////////
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(values) {
        if (Array.isArray(values) && values.every(el => typeof el === 'string')) {
            this.dataState = values;
            return;
        }
        else
            throw new Error(`Param is not an Array of strings.`);
    }
}
const MyBands = new Bands();
MyBands.data = ['Neil Young', 'Led Zep'];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, 'ZZ Top'];
console.log(MyBands.data);
