function process(exampleArray) {
	newArray = [];
	for (var i = 0; i < exampleArray.length; i++) {
		for (var j = i; j < exampleArray.length; j++) {
			if (exampleArray[i] + exampleArray[j] == 0) {
				newArray.push(i+", "+j);
			}
		}
	}
	return newArray;
}

var exampleArray = [ 2, -5, 10, 5, 4, -10, 0 ];
var results = process(exampleArray);
console.log(results);