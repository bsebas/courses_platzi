const helloWorld = () => {
    const hello = 'Hello world'
    console.log(hello)
}
g
helloWorld();
console.log(hello);

var scope = 'I am global';
const functionScope = () => {
    var scope = 'I am just a local'
    const func = () => {
        return scope;
    }
    console.log(func())
}

functionScope();