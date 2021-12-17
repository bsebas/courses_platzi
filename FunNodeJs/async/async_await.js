function Hello(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Hola ' + name);
      resolve(name);
    }, 1000)
  })
}
function Speak() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('bla bla');
      resolve('')

    }, 1000)
  })
}
function Bye(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Bye ' + name)
      resolve(name);
    }, 1000)
  })
}
let veces = 3;
console.log('Iniciando proceso..');
(async () => {
  try {
    const hello = await Hello('Carlos')
    await Speak();
    await Speak();
    const bye = await Bye('Carlos');
  } catch (e) {
    console.error('error', e)
  }

})();

console.log('Terminando proceso');
