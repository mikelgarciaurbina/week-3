function averageColon(numbers){
	var numsArray = numbers.split(':');
	var sum = numsArray.reduce(function(a, b) { return parseInt(a) + parseInt(b); });
	var avg = sum / numsArray.length;
	console.log(avg);
}

var numbers = '80:70:90:100';
averageColon(numbers);