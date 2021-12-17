function Hello(name,callback){
  setTimeout(()=>{
console.log('Hola'+name)
    callback();
  },1000)
}

function Bye(name){
  setTimeout(()=>{
    console.log('Bye'+name)
  },1000)
}

console.log('Iniciando proceso..');
  Hello('Carlos',()=>{
    Bye('Carlos');
    console.log('Terminando proceso');
});
