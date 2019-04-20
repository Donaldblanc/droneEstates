var arDrone = require('ar-drone');
var http    = require('http');

// console.log('Connecting png stream ...');

var pngStream = arDrone.createClient().getPngStream();

var lastPng;
pngStream
  .on('error', console.log)
  .on('data', function(pngBuffer) {
    lastPng = pngBuffer;
  });

var server = http.createServer(function(req, res) {
  if (!lastPng) {
    res.writeHead(503);
    res.end('Did not receive any png data yet.');
    return;
  }

  res.writeHead(200, {'Content-Type': 'image/png'});
  res.end(lastPng);
});

server.listen(8080, function() {
  console.log('Serving latest png on port 8080 ...');
  console.log(`http://localhost:8080/`)
});




// var io = require('socket.io-client'),
//     socket = io.connect('localhost', {
//         port: 3111
//     });
// socket.on('connect', function () { console.log("socket connected"); });
// socket.emit('image', { image: 'whazzzup?' });


// var client = arDrone.createClient();
// client.getPngStream()
//     .on('error', console.log)
//     .on('data', function(frame) {
//         socket.emit('image', { image: frame });
//     });



// var video = arDrone.createClient().getVideoStream();

// video.on('data', console.log);
// video.on('error', console.log);


// var pngStream = client.getPngStream();

// pngStream
//  .on('error', console.log)
//  .on('data', function(pngBuffer) {
//        sendPng(pngBuffer);
//  },

// function sendPng(buffer) {
//  res.write('--daboundary\nContent-Type: image/png\nContent-length: ' + buffer.length + '\n\n');
//  res.write(buffer);
// });