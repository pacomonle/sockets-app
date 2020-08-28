const { io } = require('../server');


io.on('connection', (client) => {
    console.log('usuario conectado')

    client.on('disconnect', ()=>{
        console.log('usuario desconectado')
    })

   

    // emiter cliente
    client.emit('enviarMensaje', {
        usuario: 'Administrado',
        mensaje: 'Bienvenido a sockets.io-app'
    })

    // escuchar cliente
   client.on('enviarMensaje', (data, callback)=>{
       console.log(data)

       client.broadcast.emit('enviarMensaje', data);

       /*
       if(data.usuario){
           callback({resp:'TODO OK'})
       }else{
           callback({resp:'Ha existido un problema'})
       }
       */
   })
})
