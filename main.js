$(document).on('ready', function(){

	// Write a function called 'tripleFive' 
	// which loops three times using a for loop. Each iteration of the loop,
	// output 'Five!' using console.log.

	var tripleFive= function() {
		for (i=0; i<3; i++) {
			console.log('Five!')
		}
	}
	
	tripleFive();

// Write a function called 'lastLetter' which takes a single string 
// argument and returns the last character in the string.
// lastLetter('hello') should return 'o'
// lastLetter('island') should return 'd'

	var lastLetter = function(string) {
		var result= string.slice(-1);
		console.log(result);
	}

	lastLetter('House');

	// Write a function called 'square' which takes a single argument
	// which is a number, and returns number * number.

	var square = function(number) {
		var result=number*number;
		console.log(result);
	}

	square(4);

	// Write a function called 'negate' which takes a single number 
	// argument and returns the negative of that number.

	var negate= function(number) {
		var result = number*-1;
		console.log(result);
	}

	negate(9);
})

	// Write a function called 'toArray' which takes three arguments 
	// and returns an array with each of those arguments as items.

	var toArray=function(x,y,z) {
		var emptyArr = [];
		emptyArr.push(x,y,z);
		console.log(emptyArr);
	}

	toArray(4,6,1)

	Write a function called 'startsWithA' which takes a single 
	string argument and returns true if the given string's first letter 
	is 'A' and false otherwise.








