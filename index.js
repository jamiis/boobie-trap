var express = require('express')
var app = express();

// app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');
app.set('port', (process.env.PORT || 5000))

var appPath = __dirname + '/client';

app.get('/', function(req, res) { 
  res.render(appPath + '/index')
});
app.use('/img', express.static(appPath + '/img/'));
app.use('/css', express.static(appPath + '/css/'));
app.use('/js',  express.static(appPath + '/js/'));


app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
