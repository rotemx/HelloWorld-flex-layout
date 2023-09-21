// sync code:

function return17()
{
	return Promise.resolve(17)
}

function addFunctionAnd78(promiseFn)
{
	return promiseFn()
		.then(value => {
			return Promise.resolve(value + 78)
		})
}

addFunctionAnd78(return17)
	.then(value => {
		console.log(value);
	})

// console.log(value);


// async code:
// results:
// addFunctionAnd78Promise(return17Promise)
// .then(value=> { console.log(value) })
// 95
