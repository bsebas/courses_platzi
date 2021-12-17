function Hello(name,callback){
  setTimeout(()=>{
    console.log('Hola '+ name)
    callback();
  },1000)
}
function speak(callback){
  setTimeout(()=>{
    console.log('Bla bla bla')
    callback();
  },1000)
}
function Bye(name,callback){
  setTimeout(()=>{
    console.log('Bye '+ name);
    callback();
  },1000)
}

//console.log('Iniciando proceso..');
 // Hello('Carlos',()=>{
   // speak(()=>{
 //Bye('Carlos',()=>{
  //      console.log('Terminando proceso');
 //     }
//    );
//
//    })
//});
