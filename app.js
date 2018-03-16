const express = require('express');
const app = express();

app.get('/', ( req, res ) => {

});

app.post('/api/shorten', ( req, res ) => {

});

app.get('/:encoded_id', ( req, res ) => {

});

const server = app.listen(3000, () => {
    console.log('Server listening port 3000');
});