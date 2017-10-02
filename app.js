var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api', function(req, res) {
    console.log("Enter get api handler");

    var user_id = req.param('id');
    var token = req.param('token');
    var geo = req.param('geo');

    res.send(user_id + ' ' + token + ' ' + geo);
})

app.post('/api', function(req, res) {
    var user_id = req.body.id;
    var token = req.body.token;
    var geo = req.body.geo;
    
    //res.send(user_id + ' ' + token + ' ' + geo);
    res.json({
        version: '1.0',
        response: {
            outputSpeech: {
                type: 'PlainText',
                text: 'You are lucky man'
            }
        }
    });
});

app.listen(port);
console.log("Server started on port ", port);