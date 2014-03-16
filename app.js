var http = require('http');
httpServer = http.createServer(function(req, res){
		res.end('hello world')
});

httpServer.listen(process.env.PORT || 1337)

var io = require('socket.io').listen(httpServer);

io.sockets.on('connection', function(socket){

	socket.on('addScore', function(result){
		socket.broadcast.emit('broadcastScore',result)
	});

	socket.on('addClassement', function(classement){
		socket.broadcast.emit('broadcastAddClassement', classement)
	});

	socket.on('updateClassement', function(result){
		socket.broadcast.emit('broadcastUpdateClassement', result)
	});
});
