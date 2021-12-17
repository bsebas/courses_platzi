const fs = require('fs');

function read(path, cb) {
  fs.readFile(path, (err, data) => {
    cb(data.toString())
  })
}

function write(path, content, cb) {
  fs.writeFile(path, content, (err, data) => {
    if (err) {
      console.error(err)
    } else {
      console.log('Se creo el archivo correctamente')
    }
  }, cb)
}
function borrar(path, cb) {
  fs.unlink(path, cb)
}
//write(__dirname + `/filenew.txt`, 'Un archivo nuevo', console.log)
//read(__dirname + `/filenew.txt`, console.log)
borrar(__dirname + '/filenew.txt', console.log)
