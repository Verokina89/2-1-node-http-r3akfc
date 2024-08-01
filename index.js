// crear servidor http
const http = require('node:http');

// nos va a dar dos argumentos trabajando con un aarrow function, el request y respons. (peticion y  la respuesta)
const server = http.createServer((req, res) => {
  console.log('request recived');
  res.end('<h1><mark>hola mundo</mark><h1/>');  //ñadimos html para modificar y crear especie de plantillas.
});
//ahora se le indica al servidor que tiene que escichar. Pasamos una arrowfunction para indicarle a server el puerto q tenemos que trabajar y dentro la indicacion
server.listen(0, () => { //pasamos un port 0 que coge uno libre.
  // console.log('server listening on port 3000'); con este metodo le lindicamos al servidor el puerto.

  //esta es otra manera utilizando un literal string y entre llaves pasamos el puerto para que se ejecute en el puerto como tal indicado en la funcion anterior.
  console.log(`server listening on port http://localhost:${server.address().port}`
  ); //añadimos el host en el que estamos trabajando para abrir una pestaña nueva.
});

