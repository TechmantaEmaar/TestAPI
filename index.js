const express = require('express');
const routes = express.Router();
const app = express();

routes.get('/', (req, res, next) => {
    res.send('Hi this is test')
});

app.use('/api', routes); 

app.listen(5000, () => {
    console.log('running...')
})