const express = require('express');
const app = express();
const port = 3000

//app.METHOD(PATH, HANDLER);

app.listen(3000, (req, res) => {
    console.log('Express app listening on port ${3000}')
});

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.post('/', (req, res) => {
    res.send('Got a POST request')
});

app.put('/', (req, res) => {
    res.send('Got a PUT request at /')
});

app.delete('/', (req, res) => {
    res.send('Got a DELETE request at /')
});

app.use(express.static('public'));
