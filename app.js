const express = require('express');
const precipitationRouter = require('./src/routes/precipitation/precipitation.routes')
const cors = require('cors');

const app = express();
app.use(cors({
    // this means that allow only the request from 3000 request clients
    origin: 'http://localhost:3000' 
}));
app.use(express.json());
app.use(precipitationRouter);
app.use('/precipitation', precipitationRouter);

module.exports = app;