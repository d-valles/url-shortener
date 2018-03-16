const express = require('express');
const app = express();

const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', ( req, res ) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.post('/api/shorten', ( req, res ) => {

});

app.get('/:encoded_id', ( req, res ) => {

});

const server = app.listen(3000, () => {
    console.log('Server listening port 3000');
});