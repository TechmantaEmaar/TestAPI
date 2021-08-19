const express = require('express');
const routes = express.Router();
const app = express();

const server = require('http');

routes.get('/', (req, res, next) => {
    res.json({data: { name: 'Alex', address: 'USA' }})
});

app.use('/api', routes); 

// app.listen(5000, () => {
//     console.log('running...')
// })

// const http = require('http');

// const server = http.createServer((request, response) => {
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.end("Hello World!");
// });

// testing for commit

const port = process.env.PORT || 1337;
app.listen(port);

console.log("Server running at http://localhost:%d", port);