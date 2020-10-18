// import lib
const express = require('express');
const path = require('path');

const pages = require('./pages.js');

// initiate express
const server = express();

server
  // use body from req
  .use(express.urlencoded({ extended: true }))
  //using statiic files
  .use(express.static('public'))
  // configure template engine
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'hbs');

// create path
server.get('/', pages.index);
server.get('/orphanage', pages.orphanage);
server.get('/orphanages', pages.orphanages);
server.get('/create-orphanage', pages.createOrphanage);
server.post('/save-orphanage', pages.saveOrphanage);

// turn server on
server.listen(5500);
