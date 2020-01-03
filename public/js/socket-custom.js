var socket = io();

// 'on' - Escucha información
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

// 'emit' - Envia información
socket.emit('enviarMensaje', {
    usuario: 'Victoria',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Respuesta server: ', resp);
});

// Escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log('servidor: ', mensaje);
});