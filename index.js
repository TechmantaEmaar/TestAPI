// const express = require('express');
// const routes = express.Router();
// const app = express();

// const server = require('http');

// routes.get('/', (req, res, next) => {
//     res.send('Hi this is test')
// });

// app.use('/api', routes); 

// app.listen(5000, () => {
//     console.log('running...')
// })

const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!");
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);