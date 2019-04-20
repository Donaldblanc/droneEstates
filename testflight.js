// takeoff() - has the drone takeoff and hover above the ground
// land() - has the drone land
// up(speed) - has the drone gain altitude at a speed between 1 (max speed) and 0 (still).
// down(speed) - makes the drone reduce altitude
// clockwise(speed) - drone spins clockwise
// counterClockwise(speed) - drone spins counter-clockwise
// front(speed)/back(speed) - changes the pitch causing horizontal movement
// left(speed)/right(speed) - changes the roll causing horizontal movement
// stop() - keeps the drone hovering in place


var arDrone = require('ar-drone');
var http    = require('http');

//var pngStream = arDrone.createClient().getPngStream();
var client = arDrone.createClient();

console.log("about to take");
client.takeoff();
client.after(2000, function(){
    console.log("about to land");
    this.stop();
    this.land();
});
