function PitFights(vikings, turns){
	this.vikings = vikings;
	this.turns = turns;
	this.winner = "";
}

PitFights.prototype.game = function(){
	this.viking_attack = this.vikings[0];
	this.viking_defense = this.vikings[1];

	for (var i = 0; i <= this.turns; i++) {
		if (i == this.turns) {
			if(this.viking_attack.health > this.viking_defense.health) {
        		winner = this.viking_attack.name;
        	} else {
        		winner = this.viking_defense.name;
        	}
            return console.log("The winner is: "+winner)
        }
        else if (this.viking_defense.health > this.viking_attack.strength) {
            this.viking_defense.receive(this.viking_attack.strength);
            this.showTurnDescribe(this.viking_attack, this.viking_defense, i);
        }
        else {
            return console.log(this.viking_defense.name + " surrenders...");
        };
        this.viking_attack = [this.viking_defense, this.viking_defense = this.viking_attack][0];

        this.sleep(3000);
    };
}

PitFights.prototype.presentations = function() {
	console.log("\t" + this.vikings[0].name + " Vikings\t\t" + this.vikings[1].name + " Vikings");
	console.log("\t***************\t\t***************");
	console.log("\tHealth: " + this.vikings[0].health + "\t\tHealth: " + this.vikings[1].health);
	console.log("\tStrength: " + this.vikings[0].strength + "\t\tStrength: " + this.vikings[1].strength);
	console.log("");
}

PitFights.prototype.showTurnDescribe = function(attack, defense, turn) {
	console.log("Turn: " + (turn + 1));
	console.log(attack.name + " hits " + defense.name);
	console.log(defense.name + " has " + defense.health + " life");
	console.log("");
}

PitFights.prototype.sleep = function(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

module.exports = PitFights;