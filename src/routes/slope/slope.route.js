const express = require('express'); 
const { 
    httpGetAllSlopData
} = require('./slope.controller')
const slopeRouter = express.Router();
slopeRouter.get('/',  httpGetAllSlopData); 
module.exports = slopeRouter;