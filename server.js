const path = require('path');

const express = require('express');
const app = express();

app.use('/static',express.static('bower_components'));
app.use('/public',express.static('public'));

app.get('/', (req, res) => res.sendFile(
path.join(__dirname, '/public', 'index.html')
));

app.listen(3000, () => console.log('Example app listening on port 3000!'));