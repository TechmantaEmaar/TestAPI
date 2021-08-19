const express = require('express');
const routes = express.Router();
const app = express();

const server = require('http');

routes.get('/', (req, res, next) => {
    res.json({data: { name: 'Alex', address: 'chigagi USA' }})
});

app.use('/api', routes);  

const port = process.env.PORT || 1337;
app.listen(port);

console.log("Server running at http://localhost:%d", port);