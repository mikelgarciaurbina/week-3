function Invasion(vikings, saxons){
    this.vikings = vikings;
    this.saxons = saxons;
}

Invasion.prototype.game = function(){
    while(this.finish()) {
        this.finish_fight(this.fight());
    }
}

Invasion.prototype.fight = function() {
    var viking_num = Math.floor(Math.random()*this.vikings.length);
    var saxons_num = Math.floor(Math.random()*this.saxons.length);
    var viking = this.vikings[viking_num];
    var saxon = this.saxons[saxons_num];
    var winner = "";

    this.presentations(viking, saxon);

    var i = 1;

    while (winner == "") {
        if (saxon.health > viking.strength) {
            saxon.receive(viking.git());
            this.showTurnDescribeViking(viking, saxon, i);
            if (viking.health > saxon.strength) {
                viking.receive(saxon.git());
                this.showTurnDescribeSackson(viking);
            }
            else {
                winner = "Saxon";
                this.vikings.splice(viking_num, 1);
            };
        }
        else {
            winner = viking.name;
            this.saxons.splice(saxons_num, 1);
        };

        i++;

        this.sleep(50);
    }

    return winner;
}

Invasion.prototype.presentations = function(viking, saxon) {
    console.log("\t\t" + viking.name + " Vikings\t\tSaxon");
    console.log("\t\t***************\t\t\t***************");
    console.log("\t\tHealth: " + viking.health + "\t\t\tHealth: " + saxon.health);
    console.log("\t\tStrength: " + viking.strength + "\t\t\tStrength: " + saxon.strength);
    console.log("");
    this.sleep(10000);
}

Invasion.prototype.battle_presentations = function() {
    console.log("\t\t\tThe battle of the century");
    console.log("\t\t\t******************************");
    console.log("\t\t\tVikings: " + this.vikings.length);
    console.log("\t\t\tSaxons: " + this.saxons.length);
    console.log("");
    this.sleep(5000);
}

Invasion.prototype.showTurnDescribeViking = function(viking, saxon, turn) {
    console.log("Turn: " + (turn));
    console.log(viking.name + " hits Saxon");
    console.log("Saxon has " + saxon.health + " life");
    console.log("");
}

Invasion.prototype.showTurnDescribeSackson = function(viking) {
    console.log("Saxon hits " + viking.name);
    console.log(viking.name + " has " + viking.health + " life");
    console.log("");
}

Invasion.prototype.finish_fight = function(winner) {
    console.log(winner + " wins this fight");
    console.log("Viking standing " + this.vikings.length);
    console.log("Saxons standing " + this.saxons.length);
    console.log("");
    this.sleep(5000);
}

Invasion.prototype.finish = function() {
    if(this.vikings.length == 0) {
        console.log("The winners of the battle are the Saxons");
        return false;
    }
    else if(this.saxons.length == 0) {
        console.log("The winners of the battle are the Vikings");
        console.log("The survivors of the battle are:");
        for(i = 0; i < this.vikings.length; i++) {
            console.log("- " + this.vikings[i].name);
        }
        console.log("");
        return false;
    }
    else {
        return true;
    }
}

Invasion.prototype.sleep = function(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }
}

module.exports = Invasion;