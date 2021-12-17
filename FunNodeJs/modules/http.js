const http = require('http');
function router(req, res) {
  console.log('Nueva petición');
  console.log(req.url)
  res.writeHead(201, {'Content-Type': 'text/plain'})
  // Escribe respuesta al usuario
  res.write('Hola http')
  res.end()

}
http.createServer(router).listen(3000);

console.log('Listen  3000')
