const io = require('socket.io')(9010)

const users = {}

io.on('connection', socket => {
    socket.on('new-user', name => {
        users[socket.id] = name
        socket.broadcast.emit('user-connected', name)
    })
    socket.on('send-chat-message', message => {
        socket.broadcast.emit('chat-message', { message: message, name: users[socket.id] })
    })
    socket.on('disconnect', name => {
        socket.broadcast.emit('user-disconnected', user[socket.id])
        delete users[socket.id]
    })
})