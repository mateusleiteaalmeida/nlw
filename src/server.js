// import lib
const express = require('express');

// initiate express
const server = express ()

// create path
server.get('/', (request, response) => {
    return response.sendFile('Oi direto do back-end')
})

// turn server on
server.listen(5500)