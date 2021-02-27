const express = require("express")
const carsRouter = require('./cars/cars-router');

const server = express()

server.use(express.json());
server.use(express.urlencoded({extended: false}));
server.use('/api/cars', carsRouter);

module.exports = server
