// Void

// Type explicito

function showInfo(user:any):any{
    console.log(user.id,user.username,user.firstName)
    return 'hola';
}

showInfo({id:1,username:'asfsafsa',firstName:"fasa"})

function errorNever(code:number,message:string):never{
    throw new Error("fasfs");
    
}
errorNever(12,"fasfa")