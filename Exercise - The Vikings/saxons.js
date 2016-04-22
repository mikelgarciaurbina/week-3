function Saxons(health, strength){
	this.health = health;
	this.strength = strength;
}

Saxons.prototype.git = function() {
	return this.strength;
}

Saxons.prototype.receive = function(damange) {
	this.health -= damange
}

module.exports = Saxons;