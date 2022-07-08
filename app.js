const express = require('express');
const precipitationRouter = require('./src/routes/precipitation/precipitation.routes')
const slopeRouter = require('./src/routes/slope/slope.route')
const cors = require('cors');

const app = express();
app.use(cors({
    // this means that allow only the request from 3000 request clients
    origin: 'http://localhost:3000'
}));
app.use(express.json());
app.use(precipitationRouter);
app.use(slopeRouter);
app.use('/precipitation', precipitationRouter);
app.use('/slope', slopeRouter);

module.exports = app;