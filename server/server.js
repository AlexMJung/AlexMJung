var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var port = process.env.PORT || 8000;

app.use(express.static('./server/public'));

app.listen(port, function(){
    console.log('listening on port', port);
    
})