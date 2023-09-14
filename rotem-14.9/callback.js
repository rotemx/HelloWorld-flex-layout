// write a higher-order-function that receives any function as a parameter and
// a second parameter that is a number of seconds, and runs the function
// after the provided number of seconds

//example usage:
// runInTheFuture(()=>{console.log("this is the future!"), 4}
//this code will log the line after 4 seconds

// 2. the function should return the return value of the
// provided function (* tricky)


function runInTheFuture(fn1, fn2, num)
{
	setTimeout(() => {
		let value1 = fn1();
		fn2(value1);
	}, num * 1000);
}


console.log("before");
runInTheFuture(
	() => {
		console.log('This this the future! FIRST FUNCTION');
		return Math.random()
	},
	(data) => {
		console.log("SECOND FUNCTION: The future Value is ...." + data);
	},
	3);
console.log("after");


// let returnValue = (() => {
// 	console.log('This is a void function');
// 	return 18
// })(); //IIFE
//
// console.log('returnValue is ', returnValue);
//
