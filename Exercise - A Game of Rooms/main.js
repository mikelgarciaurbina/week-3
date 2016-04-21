var Game = require("./game.js")
var Room = require("./room.js")

var rooms = 
	{"0,0": new Room("You are in a room 1.", false),
	"0,1": new Room("You are in a room 2.1.", false),
	"1,0": new Room("You are in a room 2.2.", false),
	"0,2": new Room("You are in a room 3.1.", false),
	"2,0": new Room("You are in a room 3.2.", false),
	"1,2": new Room("You are in a room 4.1.", false),
	"2,1": new Room("You are in a room 4.2.", false),
	"2,2": new Room("You are in a room 5.", false),
	"3,2": new Room("You are in a room 6.", false),
	"4,2": new Room("You are in a room 7.", false),
	"5,2": new Room("You are in a room 8.", false),
	"5,1": new Room("You are in a room 9.", false),
	"5,0": new Room("You are in a last room. You Win!", true)
}

var game1 = new Game(rooms,"0,0")

game1.play();




