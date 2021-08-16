function newFunction(name, age, country) {
    var name = name || 'sebastian';
    var age = age || 21;
    var country = country || 'CO'
    console.log(name, age, country)
}

// es6

function newFunction2(name = 'Sebastian', age = 21, country = "CO") {
    console.log(name, age, country);
}

newFunction2();
newFunction2('Ricardo', 23, 'CO')

let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world

console.log(epicPhrase);

// es6

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

let lorem = "Una frase \n" + "otra frase"
let lorem2 = `otra frase mejor
otra otra frase`

console.log(lorem, lorem2)


let person = {
    name: 'oscar',
    age: 32,
    country: "MX"
}

console.log(person.name, person.age);

let { name, age, country } = person;

console.log(name, age, country)

let team1 = ['oscar', 'julian', 'ricardo']
let team2 = ['Valeria', 'Yesica', 'Camila'];

let education = ['David', ...team1, ...team2]

console.log(education)

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve(`Hey`)
        } else {
            reject(`Ups!`);
        }
    })
}

helloPromise().then(response => console.log(response)).catch(error => console.log(error))

function* helloWorld() {
    if (true) {
        yield 'hello, ';
    }
    if (false) {
        yield 'world'
    } else {
        yield 'mundo'
    }
}
const generatorHello = helloWorld();
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)