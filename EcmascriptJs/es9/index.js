const obj = {
    name: 'oscar',
    age: 32,
    country: 'MX',
}

let { name, ...all } = obj

console.log(all)

const obj = {
    name: 'oscar',
    age: 32,
}

const obj1 = {
    ...obj,
    country: 'MX'
}

console.log(obj1, obj)


const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true) ? resolve('Hello world'): reject(new Error('Test Error'))
    })
}

helloWorld().then(response => console.log(response)).catch(error => console.log(error)).finally(() => console.log("Fin"))