var express = require('express');
var path = require('path');
var app = require('express')();
// const Web3 = require('web3');


var http = require('http').Server(app);
var port = process.env.PORT || 3030;


app.use(express.static(path.join(__dirname, './public/')));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

http.listen(port, function () {
    console.log('listening on *:' + port);
});