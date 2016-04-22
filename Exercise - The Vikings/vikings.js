function Vikings(name, health, strength, item){
	this.name = name + " with " + item.name;
	this.health = health + item.health;
	this.strength = strength;
	this.item = item;
}

Vikings.prototype.git = function() {
	return this.strength + this.item.strength;
}

Vikings.prototype.receive = function(damage) {
	this.health -= damage;
}

module.exports = Vikings;