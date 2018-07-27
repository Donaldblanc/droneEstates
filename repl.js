var arDrone = require('ar-drone');
var client  = arDrone.createClient();
client.createRepl();

// access the head camera
client.config('video:video_channel', 0);

// access the bottom camera
client.config('video:video_channel', 3);