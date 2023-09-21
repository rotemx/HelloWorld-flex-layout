function returnPromiseOfAnyNumber(number)
{
	return Promise.resolve(number)
	// constructor syntax:
	// return new Promise((resolve, reject) => {
	// 	resolve(number)
	// })
}


returnPromiseOfAnyNumber(89)
	.then(value => {
		console.log('FIRST VALUE:');
		console.log(value);
		return Promise.resolve(value * 2)
	})
	.then(value => {
		console.log('Updated Value:');
		console.log(value);
	})
