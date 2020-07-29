const http = require('http');


http.createServer((request, respuesta) => {
        respuesta.writeHead(200, { 'Content-Type': 'application/json' });
        let salida = {
            nombre: 'Bairon',
            edad: 30,
            url: request.url
        };

        respuesta.write(JSON.stringify(salida));
        respuesta.end();


    })
    .listen(6787);

console.log('Escuchando el puerto 6787');