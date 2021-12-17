const {exec, spawn} = require('child_process');

/*exec('ls ', (err, stdout, stderr) => {
  if (err) {
    console.log(err);
  }
  console.log(stdout)
})*/
console.log(process.arch)
let proceso = spawn('ls');
console.log(proceso.pid)
console.log(proceso.connected)
console.log(proceso.killed)
proceso.stdout.on('data', (e) => {
  console.log(e)
})
proceso.on('exit', e => {
  console.log('termino el proceso')
  console.log(proceso.killed)
})
