function returnPromiseOfANumber(num)
{
	return Promise.resolve(num)
}

// .then syntax (old):
returnPromiseOfANumber(88)
	.then(value => {
		console.log('value is: ' + value); //88
	});
	
	// Async-Await syntax:
	
	(async () => {
		// here I can use "await":
		
		const value = await returnPromiseOfANumber(99)
		// this is identical to the (value) parameter inside the "then((value)=>{})"
		console.log('value is: ' + value); //99
		
		// syntactic sugar for .then(): every line from now on, will run as if it
		// is written inside a "then()":
		
		console.log("This will run after the await (inside the then() ) ");
	})()

// function invocation

function wait(sec)
{
	return new Promise((resolve, reject) => {
		setTimeout(()=>{
		    resolve()
		}, sec * 1000)
	})
	// write this function...
}

(async () => {
	const num = 5;
	console.log("this is before the wait...");
	await wait(num)
	console.log(`this is after ${num} seconds of wait  wait...`);
})()

