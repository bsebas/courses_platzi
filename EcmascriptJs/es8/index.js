const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    desing: 'Ana'
}


const entrises = Object.entries(data);
console.log(entrises)
console.log(entrises.length);

const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    desing: 'Ana'
}

const values = Object.values(data)
console.log(values)

const string = 'hello';


const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (false) ? setTimeout(() => {
            resolve('Hello world')
        }, 3000): reject(new Error('Test Error'));
    })
}

const helloAsync = async() => {
    const hello = await helloWorld();
    console.log(hello)
}

helloAsync();

const anotherFunction = async() => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (e) {
        console.log(e);
    }
}

anotherFunction();