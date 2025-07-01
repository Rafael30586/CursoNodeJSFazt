const http = require('http')

http.createServer(function (request, response) {

    if(request.url === '/'){
        response.write("Welcome to the server")
        return response.end()
    }

   if(request.url === '/about'){
        response.write("Acerca de")
        return response.end() 
   }
// Los backtics permiten escribir en varias líneas
    response.write(` 
        <h1>Not found</h1>
        <p>Esta etiqueta no se encontró</p>
        <a href="/">Volver a la página principal</a>
        `)
    response.end()
}).listen(3000) // Número de puerto


console.log('Servidor escuchando en el puerto 3000')