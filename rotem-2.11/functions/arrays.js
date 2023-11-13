const numbers = [1, 2, 3, 4, 5, -4, -3, -9];

// higher-order function //  predicate (lambda)
const isXPositiveOrZero = x => x >= 0;

const positiveNumbers = numbers.filter(isXPositiveOrZero);
const positiveNumbers = numbers.filter(x => x >= 0);


// classic function example
const positiveNumbers = numbers.filter(function (x) {
	return x >= 0
});



someFunction(7)

// functions are first-class citizens - i.e. can be sent over to another function as a parameter

