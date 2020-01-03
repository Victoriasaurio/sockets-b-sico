// IMportando la variable IO
const { io } = require('../server');

//Conección del usuario
io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        //Mensaje que se envia a todos los clientes
        client.broadcast.emit('enviarMensaje', data);

        //Verificación de successfull trabajando con el usuario, mostrando si la información es correcta.
        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'TODO SALIÓ BIEN!'
        //     });
        // } else {
        //     callback({
        //         resp: 'TODO SALIÓ MAL!!!!!!'
        //     });
        // }


    });
});