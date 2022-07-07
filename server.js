const http = require('http');
const app = require('./app')
const {
    loadPrecipitationData,
} = require('./src/models/precipitatation.model')
const PORT = process.env.PORT || 8000;
const server = http.createServer(app);

async function startServer() {
    await loadPrecipitationData();
    server.listen(PORT, () => {
        console.log(`Listening on port  ${PORT}....`)
    })
}
startServer();