var Car = function(model, noise) {
	this.model = model;
	this.noise = noise;
	this.number_wheels = 4;
}

Car.prototype.makeNoise = function(){
	console.log(this.noise + "!!!!!")
}

var seat = new Car("Seat", "pppppp");
seat.makeNoise();