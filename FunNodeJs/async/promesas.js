let name='Carlos'
function Hello(){
  return new Promise((resolve,reject)=>{
    resolve('Hola ' + name)
    reject('')
  })    
}
function speak(){
  return 'Bla bla bla'
}
function Bye(){
  return  'Bye '+ name;
}

Hello().then((e)=>{
  console.log(e)
  return speak();
}).then(e=>{
  console.log(e)
  return Bye();
}).then(e=>{
  console.log(e)
})
