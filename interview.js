/************ HTML5 *************/

/************* CSS3 *************/

/********** JavaScript **********/

//Exercise
// write program that prints from 1 to 100
//for multiples of 3, print "fizz" instead of number
//for multiples of 5, print "buzz" instead of number
//for numbers multiples of 3 and 5, print BuzzFizz instead of number

for (var i = 1; i <= 100; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		console.log("BuzzFizz");
	} 
	else if (i % 3 === 0) {
		console.log("Fizz");
	} 
	else if (i % 5 === 0) {
		console.log("Buzz");
	} 
	else {
	console.log(i);
	}
}


//Exercise
console.log(2 + '2');	//22
	// the + operator can be applied to numbers and strings.  in this case, the + operator concatenates the two datatypes into a string.
console.log(2 - '2'); 	//0
	// the - operator can only be applied to numbers.  the string is converted to a number and mathematical operation occurs, giving us 0.

//Exercise
//remove duplicates from this array
let nums = [1,2,2,4];
	// new Set(nums)
	// console.log(new Set(nums));
	console.log([...new Set(nums)]);