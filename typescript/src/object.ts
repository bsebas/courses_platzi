// type: object

let user:object;   

user = {} // Object

user = {
    id:1,
    username:'paparazi',
    firstName:'pablo',
    isPro:true
}

console.log(user);

//console.log(user.username)

// Object vs object
const myObj = {
    id:1,
    username:'paparazi',
    firstName:'pablo',
    isPro:true
}

const isInstance = myObj instanceof Object;
console.log(isInstance)
console.log(user)