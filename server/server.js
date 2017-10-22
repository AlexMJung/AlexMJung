var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var passport = require('./strategies/sql.localstrategy');
var sessionConfig = require('./modules/session.config');
//var agGrid = require('./public/vendors/ag-grid.js')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routing paths
var log = require('./routes/logroute');
var login = require('./routes/loginroute');
var indexRouter = require('./routes/index.router');
var userRouter = require('./routes/user.router');
var registerRouter = require('./routes/register.router');
var getUsers = require('./routes/getusers.router');


var port = process.env.PORT || 8000;

app.use(express.static('./server/public'));
app.use(sessionConfig);
app.use(passport.initialize());
app.use(passport.session());


app.use('/logger', log);
app.use('/login', login);
app.use('/register', registerRouter);
app.use('/user', userRouter);
app.use('/getusers', getUsers);


// Catch all bucket.
app.use('/', indexRouter);

app.listen(port, function(){
    console.log('listening on port', port);
    
})