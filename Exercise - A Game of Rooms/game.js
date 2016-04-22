var read = require('read');

function Game (rooms, starting_position){
	this.rooms = rooms;
	var position = this.setPosition(starting_position);
}


Game.prototype.setPosition = function (position){
    var coordinates = position.split(',');
    this.current_position = position;
    this.current_x = parseInt(coordinates[0]);
    this.current_y = parseInt(coordinates[1]);
}


Game.prototype.currentRoom = function (){
    var room = this.rooms[this.current_position];
    return room.text;
}


Game.prototype.move = function (action){
	var directions = ["N","S","E","W"];
	var deltas = {N: [0,1], S: [0,-1], E: [1,0], W: [-1,0]};

	if (directions.indexOf(action) != -1){
		var change = deltas[action];
		var new_x = this.current_x + change[0];
		var new_y = this.current_y + change[1];

		var new_position = new_x.toString() + "," + new_y.toString();

		if (this.rooms[new_position] === undefined){
			return "You hit your face against a wall.";
		}else {
			this.setPosition(new_position);
			return this.currentRoom();
		};

	}else {
		return "You can't do that.";
	};
}

Game.prototype.finished = function (){
    var room = this.rooms[this.current_position];
    if (room["end"] === true) {
    	return true;
	}else {
		return false;
	};
}


Game.prototype.play = function(){
	var game = this;

    function processUserInput(err, userInput){
        if(userInput === "exit"){
        	console.log("Goodbye");
        }else if(userInput === "N" || userInput === "S" || userInput === "E" || userInput === "W"){
        	console.log(game.move(userInput));
    		if(game.finished() === true){
    			console.log("Congrats, you win!")
    		}else{
    			var options = {prompt: "\n> " };

                read(options, processUserInput);
    		}
        }else {
            var options = {prompt: "\n>" };

            read(options, processUserInput);    
        }
     	
     }
     console.log(game.currentRoom());
     processUserInput(null,"none");
 }

 module.exports = Game;