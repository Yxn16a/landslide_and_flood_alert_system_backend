const express = require('express'); 
const { 
    httpGetAllPrecipitation
} = require('./precipitaion.controller')
const precipitaionRouter = express.Router();
precipitaionRouter.get('/', httpGetAllPrecipitation); 
module.exports = precipitaionRouter;