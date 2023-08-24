function checkInteger(x)
{
	if (typeof x !== "number" || isNaN(x)) // "Hello" "[1,3]"
	{
		return "Error! Not a real number"
	}
	if (Number.isInteger(x))
	{
		return x;
	}
	return `is number but not an integer`;
}

console.log('checkInteger(3)', checkInteger(3));
console.log('checkInteger(2.1)', checkInteger(2.1));
console.log('checkInteger(0.222)', checkInteger(0.222));
console.log('checkInteger(-3)', checkInteger(-3));
console.log('checkInteger(0)', checkInteger(0));
console.log('checkInteger("hello")', checkInteger("hello"));
console.log('checkInteger(-0.8)', checkInteger(-0.8));
console.log('checkInteger([])', checkInteger([]));
console.log('checkInteger(true)', checkInteger(true));
console.log('checkInteger(Number.NaN)', checkInteger(Number.NaN));
console.log("checkInteger('5')", checkInteger("5"));
