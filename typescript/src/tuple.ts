export {};

let user:[number,string];
user=[1,'lusi']

console.log(user)
console.log(user[1])

// Tuplas con varios valores

let userInfo:[number,string,boolean];

userInfo=[2,'asfsa',true];

console.log(userInfo)

// Arreglo de tuplas

let array:[number,string][]=[];
array.push([1,'afasfa']);
array.push([2,'afasfa']);
array.push([3,'afasfa']);

console.log(array);

array[2][1].concat('001')