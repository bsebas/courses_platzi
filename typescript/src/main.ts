console.log('hola')

// NUMBER
// Explicito

let phone: number;
phone=1;
// phone='hola'; // error

//Inferido
let phoneNumber=23

//phoneNumber=true;

let hex:number=0xf00d;
let binary:number=0b01001111000;
let octal:number=0o744;

// TYPE: Boolean
// Explicito

let isPro:boolean;
isPro=true

// Inferido
let isUserPro=false;
isUserPro=true
// isUserPro=10 //error

let username:string='fasfs';
username=`luis`

// username=true

// Template string
let userinfo:string=`user: info
    username: ${username}
    firstName:${username}
    phone ${phone}
`
console.log(userinfo)