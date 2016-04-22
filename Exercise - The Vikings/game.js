var Vikings = require("./vikings.js")
var PitFights = require("./pitfights.js")

var vikings_array = [
	new Vikings("Alex", Math.floor((Math.random() * 10000) + 1), Math.floor((Math.random() * 100) + 1)),
	new Vikings("Mikel", Math.floor((Math.random() * 10000) + 1), Math.floor((Math.random() * 100) + 1))
];

var pit = new PitFights(vikings_array, Math.floor((Math.random() * 50) + 1));
pit.presentations();
pit.game();