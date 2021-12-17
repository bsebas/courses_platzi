process.on('beforeExit', () => {
  console.log('Se va a cerrar la aplication')
})

process.on('exit', () => {
  console.log('Se cerro la aplication')
})

process.on('uncaughtException', (error, origin) => {
  console.log('Se olvido de poner un try catch')
})

z + 2
