export {}
// <type>
let username:any;
username='asfas'

// let message:string=(<string>username).length > 5 ?'Hello':'No'
let message:string=(username as string).length > 5 ?'Hello':'No'
console.log(message)

let usernameWithId:any='fdasfads 1';
// Como obtener el username?

username=(<string>usernameWithId).substring(0,5)
console.log(username)

