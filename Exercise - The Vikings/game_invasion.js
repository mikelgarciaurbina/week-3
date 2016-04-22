var Vikings = require("./vikings.js");
var Saxons = require("./saxons.js");
var Items = require("./items.js");
var Invasion = require("./invasion.js");

var items_array = [
	new Items("Axe", 0, 20),
	new Items("Shield", 100, 0),
	new Items("Armor", 80, 0),
	new Items("Sword", 0, 15),
	new Items("Bow", 0, 30)
];

var vikings_array = [
	new Vikings("Alex", Math.floor((Math.random() * 1000) + 1), Math.floor((Math.random() * 100) + 10), items_array[Math.floor(Math.random() * items_array.length)]),
	new Vikings("Mikel", Math.floor((Math.random() * 2000) + 1000), Math.floor((Math.random() * 100) + 10), items_array[Math.floor(Math.random() * items_array.length)]),
	new Vikings("Victor", Math.floor((Math.random() * 1000) + 1), Math.floor((Math.random() * 100) + 10), items_array[Math.floor(Math.random() * items_array.length)]),
	new Vikings("Rixi", Math.floor((Math.random() * 1000) + 1), Math.floor((Math.random() * 100) + 10), items_array[Math.floor(Math.random() * items_array.length)]),
	new Vikings("Adrian", Math.floor((Math.random() * 1000) + 1), Math.floor((Math.random() * 100) + 10), items_array[Math.floor(Math.random() * items_array.length)]),
	new Vikings("Gonzalo", Math.floor((Math.random() * 1000) + 1), Math.floor((Math.random() * 100) + 10), items_array[Math.floor(Math.random() * items_array.length)]),
	new Vikings("Urtzi", Math.floor((Math.random() * 1000) + 1), Math.floor((Math.random() * 100) + 10), items_array[Math.floor(Math.random() * items_array.length)]),
	new Vikings("Alfonso", Math.floor((Math.random() * 1000) + 1), Math.floor((Math.random() * 100) + 10), items_array[Math.floor(Math.random() * items_array.length)]),
	new Vikings("Cillas", Math.floor((Math.random() * 1000) + 1), Math.floor((Math.random() * 100) + 10), items_array[Math.floor(Math.random() * items_array.length)]),
	new Vikings("Juanlu", Math.floor((Math.random() * 1000) + 1), Math.floor((Math.random() * 100) + 10), items_array[Math.floor(Math.random() * items_array.length)]),
	new Vikings("J.Martos", Math.floor((Math.random() * 1000) + 1), Math.floor((Math.random() * 100) + 10), items_array[Math.floor(Math.random() * items_array.length)]),
	new Vikings("Manu", Math.floor((Math.random() * 1000) + 1), Math.floor((Math.random() * 100) + 10), items_array[Math.floor(Math.random() * items_array.length)]),
	new Vikings("Andoni", Math.floor((Math.random() * 1000) + 1), Math.floor((Math.random() * 100) + 10), items_array[Math.floor(Math.random() * items_array.length)]),
	new Vikings("Antonio", Math.floor((Math.random() * 1000) + 1), Math.floor((Math.random() * 100) + 10), items_array[Math.floor(Math.random() * items_array.length)])
];

var saxons_array = [];

for(var i = 0; i < 100; i++){
	saxons_array.push(new Saxons(Math.floor((Math.random() * 500) + 1), Math.floor((Math.random() * 50) + 1)));
}

var inv = new Invasion(vikings_array, saxons_array);
inv.battle_presentations();
inv.game();