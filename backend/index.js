const express = require('express')
const app = express()
const PORT = 4000
const http = require('http')
const {Server} = require('socket.io')
const cors = require('cors')

app.use(cors())

const server = http.createServer(app)



const io = new Server(server, {
    cors : {
        origin : "http://localhost:3000",
        methods : ['GET','POST']
    }
})

const CHAT_BOT = 'chatbot';

io.on('connection', (socket) => {

    let created_time = Date.now();

    console.log(`user connected ${socket.id}`);
    socket.on('join_room', (data) => {
        const {username, room} = data;
        socket.join(room);
    })
})




server.listen(4000, () => 'server is running')

