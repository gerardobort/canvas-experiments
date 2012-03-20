var express = require('express'),
	app = express.createServer();

app.configure(function() {
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	app.set('view options', {layout: false});
	app.use(express.static(__dirname + '/static'));
});

var io = require('socket.io').listen(app);
io.configure(function() {
    io.set('transports', ['websocket']);
});

app.get('/', function(req, res) {
    res.redirect('/slides');
});

app.listen(8080);
