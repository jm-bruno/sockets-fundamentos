var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor.');
});

// On: para escuchar
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor.');
});

// emit: para enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Fernando',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Respuesta server: ', resp);
});

// escuchar al server
socket.on('enviarMensaje', function(mensaje) {
    console.log(mensaje);
});