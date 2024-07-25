var express = require('express');

var app = express();

app.listen(3000, function() {
    console.log('Server is running on port 3000');
})

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.use(express.static('public'));