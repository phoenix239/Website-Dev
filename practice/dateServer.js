var express = require('express');
var app = express();

app.get('/date', function(req, res) {
    let myDate = new Date().toLocaleDateString("en-US");
    let myTime = new Date().toLocaleTimeString("en-US");
    let myName = 'Adam Boyd';
    res.send(`Hello ${myName}, Date and Time: ${myDate} ${myTime}`);
});

port = 5555;
host = '127.0.0.2';
app.listen(port, host, function() {
    console.log(`Example app listening on IPv4: ${host}:${port}`);
});