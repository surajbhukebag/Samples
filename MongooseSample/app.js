
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
    , userApi = require('./routes/userapis')
  , http = require('http')
    ,	cors = require('cors')
  , path = require('path');

var app = express();

//Enable CORS
app.use(cors());

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);


app.post('/user', cors(), userApi.createUser);
app.post('/getUser', cors(), userApi.getUser);
app.post('/deleteUser', cors(), userApi.deleteUser);
app.post('/updateUser', cors(), userApi.updateUser);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
